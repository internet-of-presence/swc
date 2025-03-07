function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
import regeneratorRuntime from "regenerator-runtime";
// @module: system
// @target: esnext
// @useDefineForClassFields: false
// @filename: 0.ts
export var B = /*#__PURE__*/ function() {
    "use strict";
    function B() {
        _classCallCheck(this, B);
    }
    _createClass(B, [
        {
            key: "print",
            value: function print() {
                return "I am B";
            }
        }
    ]);
    return B;
}();
export function foo() {
    return "foo";
}
// @filename: 1.ts
export function backup() {
    return "backup";
}
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _classCallCheck(this, C);
        this.myModule = import("./0");
    }
    _createClass(C, [
        {
            key: "method",
            value: function method() {
                var loadAsync = import("./0");
                this.myModule.then(function(Zero) {
                    console.log(Zero.foo());
                }, function() {
                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(err) {
                        var one;
                        return regeneratorRuntime.wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    console.log(err);
                                    _ctx.next = 3;
                                    return import("./1");
                                case 3:
                                    one = _ctx.sent;
                                    console.log(one.backup());
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function(err) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        }
    ]);
    return C;
}();
export var D = /*#__PURE__*/ function() {
    "use strict";
    function D() {
        _classCallCheck(this, D);
        this.myModule = import("./0");
    }
    _createClass(D, [
        {
            key: "method",
            value: function method() {
                var loadAsync = import("./0");
                this.myModule.then(function(Zero) {
                    console.log(Zero.foo());
                }, function() {
                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(err) {
                        var one;
                        return regeneratorRuntime.wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    console.log(err);
                                    _ctx.next = 3;
                                    return import("./1");
                                case 3:
                                    one = _ctx.sent;
                                    console.log(one.backup());
                                case 5:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function(err) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        }
    ]);
    return D;
}();
