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
function _createSuper(Derived1) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived1), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
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
var r1arg = function(x) {
    return null;
};
var r1arg2 = function(x) {
    return null;
};
var r1 = foo1(r1arg);
var r1a = [
    r1arg,
    r1arg2
];
var r1b = [
    r1arg2,
    r1arg
];
var r2arg = function(x) {
    return [
        ''
    ];
};
var r2arg2 = function(x) {
    return [
        ''
    ];
};
var r2 = foo2(r2arg);
var r2a = [
    r2arg,
    r2arg2
];
var r2b = [
    r2arg2,
    r2arg
];
var r3arg = function(x) {
    return null;
};
var r3arg2 = function(x) {};
var r3 = foo3(r3arg);
var r3a = [
    r3arg,
    r3arg2
];
var r3b = [
    r3arg2,
    r3arg
];
var r4arg = function(x, y) {
    return '';
};
var r4arg2 = function(x, y) {
    return '';
};
var r4 = foo4(r4arg);
var r4a = [
    r4arg,
    r4arg2
];
var r4b = [
    r4arg2,
    r4arg
];
var r5arg = function(x) {
    return null;
};
var r5arg2 = function(x) {
    return null;
};
var r5 = foo5(r5arg);
var r5a = [
    r5arg,
    r5arg2
];
var r5b = [
    r5arg2,
    r5arg
];
var r6arg = function(x) {
    return null;
};
var r6arg2 = function(x) {
    return null;
};
var r6 = foo6(r6arg);
var r6a = [
    r6arg,
    r6arg2
];
var r6b = [
    r6arg2,
    r6arg
];
var r11arg = function(x, y) {
    return null;
};
var r11arg2 = function(x, y) {
    return null;
};
var r11 = foo11(r11arg);
var r11a = [
    r11arg,
    r11arg2
];
var r11b = [
    r11arg2,
    r11arg
];
var r15arg = function(x) {
    return null;
};
var r15arg2 = function(x) {
    return null;
};
var r15 = foo15(r15arg);
var r15a = [
    r15arg,
    r15arg2
];
var r15b = [
    r15arg2,
    r15arg
];
var r16arg = function(x) {
    return null;
};
var r16arg2 = function(x) {
    return null;
};
var r16 = foo16(r16arg);
var r16a = [
    r16arg,
    r16arg2
];
var r16b = [
    r16arg2,
    r16arg
];
var r17arg = function(x) {
    return null;
};
var r17 = foo17(r17arg);
var r18arg = function(x) {
    return null;
};
var r18 = foo18(r18arg);
