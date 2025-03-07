function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.
///<reference path='typescript.ts' />
var TypeScript;
(function(TypeScript1) {
    var pushAssignScope = function pushAssignScope(scope, context, type, classType, fnc) {
        var chain = new ScopeChain(null, context.scopeChain, scope);
        chain.thisType = type;
        chain.classType = classType;
        chain.fnc = fnc;
        context.scopeChain = chain;
    };
    var popAssignScope = function popAssignScope(context) {
        context.scopeChain = context.scopeChain.previous;
    };
    var instanceCompare = function instanceCompare(a, b) {
        if (a == null || !a.isInstanceProperty()) {
            return b;
        } else {
            return a;
        }
    };
    var instanceFilterStop = function instanceFilterStop(s) {
        return s.isInstanceProperty();
    };
    var preAssignModuleScopes = function preAssignModuleScopes(ast, context) {
        var moduleDecl = ast;
        var memberScope = null;
        var aggScope = null;
        if (moduleDecl.name && moduleDecl.mod) {
            moduleDecl.name.sym = moduleDecl.mod.symbol;
        }
        var mod = moduleDecl.mod;
        // We're likely here because of error recovery
        if (!mod) {
            return;
        }
        memberScope = new SymbolTableScope(mod.members, mod.ambientMembers, mod.enclosedTypes, mod.ambientEnclosedTypes, mod.symbol);
        mod.memberScope = memberScope;
        context.modDeclChain.push(moduleDecl);
        context.typeFlow.checker.currentModDecl = moduleDecl;
        aggScope = new SymbolAggregateScope(mod.symbol);
        aggScope.addParentScope(memberScope);
        aggScope.addParentScope(context.scopeChain.scope);
        pushAssignScope(aggScope, context, null, null, null);
        mod.containedScope = aggScope;
        if (mod.symbol) {
            context.typeFlow.addLocalsFromScope(mod.containedScope, mod.symbol, moduleDecl.vars, mod.members.privateMembers, true);
        }
    };
    var preAssignClassScopes = function preAssignClassScopes(ast, context) {
        var classDecl = ast;
        var memberScope = null;
        var aggScope = null;
        if (classDecl.name && classDecl.type) {
            classDecl.name.sym = classDecl.type.symbol;
        }
        var classType = ast.type;
        if (classType) {
            var classSym = classType.symbol;
            memberScope = context.typeFlow.checker.scopeOf(classType);
            aggScope = new SymbolAggregateScope(classType.symbol);
            aggScope.addParentScope(memberScope);
            aggScope.addParentScope(context.scopeChain.scope);
            classType.containedScope = aggScope;
            classType.memberScope = memberScope;
            var instanceType = classType.instanceType;
            memberScope = context.typeFlow.checker.scopeOf(instanceType);
            instanceType.memberScope = memberScope;
            aggScope = new SymbolAggregateScope(instanceType.symbol);
            aggScope.addParentScope(context.scopeChain.scope);
            pushAssignScope(aggScope, context, instanceType, classType, null);
            instanceType.containedScope = aggScope;
        } else {
            ast.type = context.typeFlow.anyType;
        }
    };
    var preAssignInterfaceScopes = function preAssignInterfaceScopes(ast, context) {
        var interfaceDecl = ast;
        var memberScope = null;
        var aggScope = null;
        if (interfaceDecl.name && interfaceDecl.type) {
            interfaceDecl.name.sym = interfaceDecl.type.symbol;
        }
        var interfaceType = ast.type;
        memberScope = context.typeFlow.checker.scopeOf(interfaceType);
        interfaceType.memberScope = memberScope;
        aggScope = new SymbolAggregateScope(interfaceType.symbol);
        aggScope.addParentScope(memberScope);
        aggScope.addParentScope(context.scopeChain.scope);
        pushAssignScope(aggScope, context, null, null, null);
        interfaceType.containedScope = aggScope;
    };
    var preAssignWithScopes = function preAssignWithScopes(ast, context) {
        var withStmt = ast;
        var withType = withStmt.type;
        var members = new ScopedMembers(new DualStringHashTable(new StringHashTable(), new StringHashTable()));
        var ambientMembers = new ScopedMembers(new DualStringHashTable(new StringHashTable(), new StringHashTable()));
        var withType = new Type();
        var withSymbol = new WithSymbol(withStmt.minChar, context.typeFlow.checker.locationInfo.unitIndex, withType);
        withType.members = members;
        withType.ambientMembers = ambientMembers;
        withType.symbol = withSymbol;
        withType.setHasImplementation();
        withStmt.type = withType;
        var withScope = new TypeScript.SymbolScopeBuilder(withType.members, withType.ambientMembers, null, null, context.scopeChain.scope, withType.symbol);
        pushAssignScope(withScope, context, null, null, null);
        withType.containedScope = withScope;
    };
    var preAssignFuncDeclScopes = function preAssignFuncDeclScopes(ast, context) {
        var funcDecl = ast;
        var container = null;
        var localContainer = null;
        if (funcDecl.type) {
            localContainer = ast.type.symbol;
        }
        var isStatic = hasFlag(funcDecl.fncFlags, FncFlags.Static);
        var isInnerStatic = isStatic && context.scopeChain.fnc != null;
        // for inner static functions, use the parent's member scope, so local vars cannot be captured
        var parentScope = isInnerStatic ? context.scopeChain.fnc.type.memberScope : context.scopeChain.scope;
        // if this is not a method, but enclosed by class, use constructor as
        // the enclosing scope
        // REVIEW: Some twisted logic here - this needs to be cleaned up once old classes are removed
        //  - if it's a new class, always use the contained scope, since we initialize the constructor scope below
        if (context.scopeChain.thisType && (!funcDecl.isConstructor || hasFlag(funcDecl.fncFlags, FncFlags.ClassMethod))) {
            var instType = context.scopeChain.thisType;
            if (!(instType.typeFlags & TypeFlags.IsClass) && !hasFlag(funcDecl.fncFlags, FncFlags.ClassMethod)) {
                if (!funcDecl.isMethod() || isStatic) {
                    parentScope = instType.constructorScope;
                } else {
                    // use constructor scope if a method as well
                    parentScope = instType.containedScope;
                }
            } else {
                if (context.scopeChain.previous.scope.container && context.scopeChain.previous.scope.container.declAST && context.scopeChain.previous.scope.container.declAST.nodeType == NodeType.FuncDecl && context.scopeChain.previous.scope.container.declAST.isConstructor) {
                    // if the parent is the class constructor, use the constructor scope
                    parentScope = instType.constructorScope;
                } else if (isStatic && context.scopeChain.classType) {
                    parentScope = context.scopeChain.classType.containedScope;
                } else {
                    // else, use the contained scope
                    parentScope = instType.containedScope;
                }
            }
            container = instType.symbol;
        } else if (funcDecl.isConstructor && context.scopeChain.thisType) {
            // sets the container to the class type's symbol (which is shared by the instance type)
            container = context.scopeChain.thisType.symbol;
        }
        if (funcDecl.type == null || hasFlag(funcDecl.type.symbol.flags, SymbolFlags.TypeSetDuringScopeAssignment)) {
            if (context.scopeChain.fnc && context.scopeChain.fnc.type) {
                container = context.scopeChain.fnc.type.symbol;
            }
            var funcScope = null;
            var outerFnc = context.scopeChain.fnc;
            var nameText = funcDecl.name ? funcDecl.name.actualText : null;
            var fgSym = null;
            if (isStatic) {
                // In the case of function-nested statics, no member list will have bee initialized for the function, so we need
                // to copy it over.  We don't set this by default because having a non-null member list will throw off assignment
                // compatibility tests
                if (outerFnc.type.members == null && container.getType().memberScope) {
                    outerFnc.type.members = container.type.memberScope.valueMembers;
                }
                funcScope = context.scopeChain.fnc.type.memberScope;
                outerFnc.innerStaticFuncs[outerFnc.innerStaticFuncs.length] = funcDecl;
            } else {
                if (!funcDecl.isConstructor && container && container.declAST && container.declAST.nodeType == NodeType.FuncDecl && container.declAST.isConstructor && !funcDecl.isMethod()) {
                    funcScope = context.scopeChain.thisType.constructorScope; //locals;
                } else {
                    funcScope = context.scopeChain.scope;
                }
            }
            // REVIEW: We don't search for another sym for accessors to prevent us from
            // accidentally coalescing function signatures with the same name (E.g., a function
            // 'f' the outer scope and a setter 'f' in an object literal within that scope)
            if (nameText && nameText != "__missing" && !funcDecl.isAccessor()) {
                if (isStatic) {
                    fgSym = funcScope.findLocal(nameText, false, false);
                } else {
                    // REVIEW: This logic should be symmetric with preCollectClassTypes
                    fgSym = funcScope.findLocal(nameText, false, false);
                }
            }
            context.typeFlow.checker.createFunctionSignature(funcDecl, container, funcScope, fgSym, fgSym == null);
            // it's a getter or setter for a class property                     
            if (!funcDecl.accessorSymbol && funcDecl.fncFlags & FncFlags.ClassMethod && container && (!fgSym || fgSym.declAST.nodeType != NodeType.FuncDecl) && funcDecl.isAccessor() || fgSym && fgSym.isAccessor()) {
                funcDecl.accessorSymbol = context.typeFlow.checker.createAccessorSymbol(funcDecl, fgSym, container.getType(), funcDecl.isMethod() && isStatic, true, funcScope, container);
            }
            funcDecl.type.symbol.flags |= SymbolFlags.TypeSetDuringScopeAssignment;
        }
        // Set the symbol for functions and their overloads
        if (funcDecl.name && funcDecl.type) {
            funcDecl.name.sym = funcDecl.type.symbol;
        }
        // Keep track of the original scope type, because target typing might override
        // the "type" member. We need the original "Scope type" for completion list, etc.
        funcDecl.scopeType = funcDecl.type;
        // Overloads have no scope, so bail here
        if (funcDecl.isOverload) {
            return;
        }
        var funcTable = new StringHashTable();
        var funcMembers = new ScopedMembers(new DualStringHashTable(funcTable, new StringHashTable()));
        var ambientFuncTable = new StringHashTable();
        var ambientFuncMembers = new ScopedMembers(new DualStringHashTable(ambientFuncTable, new StringHashTable()));
        var funcStaticTable = new StringHashTable();
        var funcStaticMembers = new ScopedMembers(new DualStringHashTable(funcStaticTable, new StringHashTable()));
        var ambientFuncStaticTable = new StringHashTable();
        var ambientFuncStaticMembers = new ScopedMembers(new DualStringHashTable(ambientFuncStaticTable, new StringHashTable()));
        // REVIEW: Is it a problem that this is being set twice for properties and constructors?
        funcDecl.unitIndex = context.typeFlow.checker.locationInfo.unitIndex;
        var locals = new SymbolScopeBuilder(funcMembers, ambientFuncMembers, null, null, parentScope, localContainer);
        var statics = new SymbolScopeBuilder(funcStaticMembers, ambientFuncStaticMembers, null, null, parentScope, null);
        if (funcDecl.isConstructor && context.scopeChain.thisType) {
            context.scopeChain.thisType.constructorScope = locals;
        }
        // basically, there are two problems
        // - Above, for new classes, we were overwriting the constructor scope with the containing scope.  This caused constructor params to be
        // in scope everywhere
        // - Below, we're setting the contained scope table to the same table we were overwriting the constructor scope with, which we need to
        // fish lambda params, etc, out (see funcTable below)
        //
        // A good first approach to solving this would be to change addLocalsFromScope to take a scope instead of a table, and add to the
        // constructor scope as appropriate
        funcDecl.symbols = funcTable;
        if (!funcDecl.isSpecialFn()) {
            var group = funcDecl.type;
            var signature = funcDecl.signature;
            if (!funcDecl.isConstructor) {
                group.containedScope = locals;
                locals.container = group.symbol;
                group.memberScope = statics;
                statics.container = group.symbol;
            }
            funcDecl.enclosingFnc = context.scopeChain.fnc;
            group.enclosingType = isStatic ? context.scopeChain.classType : context.scopeChain.thisType;
            // for mapping when type checking
            var fgSym = ast.type.symbol;
            if ((funcDecl.fncFlags & FncFlags.Signature) == FncFlags.None && funcDecl.vars) {
                context.typeFlow.addLocalsFromScope(locals, fgSym, funcDecl.vars, funcTable, false);
                context.typeFlow.addLocalsFromScope(statics, fgSym, funcDecl.statics, funcStaticTable, false);
            }
            if (signature.parameters) {
                var len = signature.parameters.length;
                for(var i = 0; i < len; i++){
                    var paramSym = signature.parameters[i];
                    context.typeFlow.checker.resolveTypeLink(locals, paramSym.parameter.typeLink, true);
                }
            }
            context.typeFlow.checker.resolveTypeLink(locals, signature.returnType, funcDecl.isSignature());
        }
        if (!funcDecl.isConstructor || hasFlag(funcDecl.fncFlags, FncFlags.ClassMethod)) {
            var thisType = funcDecl.isConstructor && hasFlag(funcDecl.fncFlags, FncFlags.ClassMethod) ? context.scopeChain.thisType : null;
            pushAssignScope(locals, context, thisType, null, funcDecl);
        }
    };
    var preAssignCatchScopes = function preAssignCatchScopes(ast, context) {
        var catchBlock = ast;
        if (catchBlock.param) {
            var catchTable = new ScopedMembers(new DualStringHashTable(new StringHashTable(), new StringHashTable())); // REVIEW: Should we be allocating a public table instead of a private one?
            var catchLocals = new SymbolScopeBuilder(catchTable, null, null, null, context.scopeChain.scope, context.scopeChain.scope.container);
            catchBlock.containedScope = catchLocals;
            pushAssignScope(catchLocals, context, context.scopeChain.thisType, context.scopeChain.classType, context.scopeChain.fnc);
        }
    };
    var preAssignScopes = function preAssignScopes(ast, parent, walker) {
        var context = walker.state;
        var go = true;
        if (ast) {
            if (ast.nodeType == NodeType.List) {
                var list = ast;
                list.enclosingScope = context.scopeChain.scope;
            } else if (ast.nodeType == NodeType.ModuleDeclaration) {
                preAssignModuleScopes(ast, context);
            } else if (ast.nodeType == NodeType.ClassDeclaration) {
                preAssignClassScopes(ast, context);
            } else if (ast.nodeType == NodeType.InterfaceDeclaration) {
                preAssignInterfaceScopes(ast, context);
            } else if (ast.nodeType == NodeType.With) {
                preAssignWithScopes(ast, context);
            } else if (ast.nodeType == NodeType.FuncDecl) {
                preAssignFuncDeclScopes(ast, context);
            } else if (ast.nodeType == NodeType.Catch) {
                preAssignCatchScopes(ast, context);
            } else if (ast.nodeType == NodeType.TypeRef) {
                go = false;
            }
        }
        walker.options.goChildren = go;
        return ast;
    };
    var postAssignScopes = function postAssignScopes(ast, parent, walker) {
        var context = walker.state;
        var go = true;
        if (ast) {
            if (ast.nodeType == NodeType.ModuleDeclaration) {
                var prevModDecl = ast;
                popAssignScope(context);
                context.modDeclChain.pop();
                if (context.modDeclChain.length >= 1) {
                    context.typeFlow.checker.currentModDecl = context.modDeclChain[context.modDeclChain.length - 1];
                }
            } else if (ast.nodeType == NodeType.ClassDeclaration) {
                popAssignScope(context);
            } else if (ast.nodeType == NodeType.InterfaceDeclaration) {
                popAssignScope(context);
            } else if (ast.nodeType == NodeType.With) {
                popAssignScope(context);
            } else if (ast.nodeType == NodeType.FuncDecl) {
                var funcDecl = ast;
                if ((!funcDecl.isConstructor || hasFlag(funcDecl.fncFlags, FncFlags.ClassMethod)) && !funcDecl.isOverload) {
                    popAssignScope(context);
                }
            } else if (ast.nodeType == NodeType.Catch) {
                var catchBlock = ast;
                if (catchBlock.param) {
                    popAssignScope(context);
                }
            } else {
                go = false;
            }
        }
        walker.options.goChildren = go;
        return ast;
    };
    var AssignScopeContext = function AssignScopeContext(scopeChain, typeFlow, modDeclChain) {
        "use strict";
        _classCallCheck(this, AssignScopeContext);
        this.scopeChain = scopeChain;
        this.typeFlow = typeFlow;
        this.modDeclChain = modDeclChain;
    };
    TypeScript1.AssignScopeContext = AssignScopeContext;
    TypeScript1.pushAssignScope = pushAssignScope;
    TypeScript1.popAssignScope = popAssignScope;
    TypeScript1.instanceCompare = instanceCompare;
    TypeScript1.instanceFilterStop = instanceFilterStop;
    var ScopeSearchFilter = /*#__PURE__*/ function() {
        "use strict";
        function ScopeSearchFilter(select, stop) {
            _classCallCheck(this, ScopeSearchFilter);
            this.select = select;
            this.stop = stop;
            this.result = null;
        }
        _createClass(ScopeSearchFilter, [
            {
                key: "reset",
                value: function reset() {
                    this.result = null;
                }
            },
            {
                key: "update",
                value: function update(b) {
                    this.result = this.select(this.result, b);
                    if (this.result) {
                        return this.stop(this.result);
                    } else {
                        return false;
                    }
                }
            }
        ]);
        return ScopeSearchFilter;
    }();
    TypeScript1.ScopeSearchFilter = ScopeSearchFilter;
    var instanceFilter = TypeScript1.instanceFilter = new ScopeSearchFilter(instanceCompare, instanceFilterStop);
    TypeScript1.preAssignModuleScopes = preAssignModuleScopes;
    TypeScript1.preAssignClassScopes = preAssignClassScopes;
    TypeScript1.preAssignInterfaceScopes = preAssignInterfaceScopes;
    TypeScript1.preAssignWithScopes = preAssignWithScopes;
    TypeScript1.preAssignFuncDeclScopes = preAssignFuncDeclScopes;
    TypeScript1.preAssignCatchScopes = preAssignCatchScopes;
    TypeScript1.preAssignScopes = preAssignScopes;
    TypeScript1.postAssignScopes = postAssignScopes;
})(TypeScript || (TypeScript = {}));
