function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
// checking subtype relations for function types as it relates to contextual signature instantiation
// error cases, so function calls will all result in 'any'
var Errors;
(function(Errors) {
    var Base = function Base() {
        "use strict";
        _classCallCheck(this, Base);
    };
    var Derived = /*#__PURE__*/ function(Base) {
        "use strict";
        _inherits(Derived, Base);
        var _super = _createSuper(Derived);
        function Derived() {
            _classCallCheck(this, Derived);
            return _super.apply(this, arguments);
        }
        return Derived;
    }(Base);
    var Derived2 = /*#__PURE__*/ function(Derived) {
        "use strict";
        _inherits(Derived2, Derived);
        var _super = _createSuper(Derived2);
        function Derived2() {
            _classCallCheck(this, Derived2);
            return _super.apply(this, arguments);
        }
        return Derived2;
    }(Derived);
    var OtherDerived = /*#__PURE__*/ function(Base) {
        "use strict";
        _inherits(OtherDerived, Base);
        var _super = _createSuper(OtherDerived);
        function OtherDerived() {
            _classCallCheck(this, OtherDerived);
            return _super.apply(this, arguments);
        }
        return OtherDerived;
    }(Base);
    var r1arg1;
    var r1arg2;
    var r1 = foo2(r1arg1); // any
    var r1a = [
        r1arg2,
        r1arg1
    ];
    var r1b = [
        r1arg1,
        r1arg2
    ];
    var r2arg1;
    var r2arg2;
    var r2 = foo7(r2arg1); // any
    var r2a = [
        r2arg2,
        r2arg1
    ];
    var r2b = [
        r2arg1,
        r2arg2
    ];
    var r3arg1;
    var r3arg2;
    var r3 = foo8(r3arg1); // any
    var r3a = [
        r3arg2,
        r3arg1
    ];
    var r3b = [
        r3arg1,
        r3arg2
    ];
    var r4arg1;
    var r4arg2;
    var r4 = foo10(r4arg1); // any
    var r4a = [
        r4arg2,
        r4arg1
    ];
    var r4b = [
        r4arg1,
        r4arg2
    ];
    var r5arg1;
    var r5arg2;
    var r5 = foo11(r5arg1); // any
    var r5a = [
        r5arg2,
        r5arg1
    ];
    var r5b = [
        r5arg1,
        r5arg2
    ];
    var r6arg1;
    var r6arg2;
    var r6 = foo12(r6arg1); // new (x: Array<Base>, y: Array<Derived2>) => Array<Derived>
    var r6a = [
        r6arg2,
        r6arg1
    ];
    var r6b = [
        r6arg1,
        r6arg2
    ];
    var r7arg1;
    var r7arg2;
    var r7 = foo15(r7arg1); // (x: { a: string; b: number }) => number): number;
    var r7a = [
        r7arg2,
        r7arg1
    ];
    var r7b = [
        r7arg1,
        r7arg2
    ];
    var r7arg3;
    var r7c = foo15(r7arg3); // any
    var r7d = [
        r7arg2,
        r7arg3
    ];
    var r7e = [
        r7arg3,
        r7arg2
    ];
    var r8arg;
    var r8 = foo16(r8arg); // any
    var r9arg;
    var r9 = foo17(r9arg); // // (x: { <T extends Derived >(a: T): T; <T extends Base >(a: T): T; }): any[]; (x: { <T extends Derived2>(a: T): T; <T extends Base>(a: T): T; }): any[];
})(Errors || (Errors = {}));
var WithGenericSignaturesInBaseType;
(function(WithGenericSignaturesInBaseType) {
    var r2arg2;
    var r2 = foo2(r2arg2); // <T>(x:T) => T[] since we can infer from generic signatures now
    var r3arg2;
    var r3 = foo3(r3arg2); // any
})(WithGenericSignaturesInBaseType || (WithGenericSignaturesInBaseType = {}));
