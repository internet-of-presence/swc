function _arrayLikeToArray(arr, len) {
    (null == len || len > arr.length) && (len = arr.length);
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
function _construct(Parent, args, Class) {
    return (_construct = !function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }() ? function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a), instance = new Constructor();
        return Class && _setPrototypeOf(instance, Class.prototype), instance;
    } : Reflect.construct).apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return (function(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    })(arr) || (function(iter) {
        if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
    })(arr) || _unsupportedIterableToArray(arr) || (function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
function _unsupportedIterableToArray(o, minLen) {
    if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if ("Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "head",
        "middle",
        "tail"
    ]);
    return _templateObject = function _templateObject() {
        return data;
    }, data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "test",
        "and",
        ""
    ]);
    return _templateObject1 = function _templateObject1() {
        return data;
    }, data;
}
var _fieldFunc = new WeakSet(), _fieldFunc2 = new WeakSet(), A = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function A() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, A), _fieldFunc.add(this), _fieldFunc2.add(this), this.x = 1;
    }
    return Constructor = A, protoProps = [
        {
            key: "test",
            value: function() {
                _classPrivateMethodGet(this, _fieldFunc, fieldFunc).call(this), _classPrivateMethodGet(this, _fieldFunc, fieldFunc)(), new (_classPrivateMethodGet(this, _fieldFunc, fieldFunc))();
                var _instance, _ref, arr = [
                    1,
                    2
                ];
                (_instance = _classPrivateMethodGet(this, _fieldFunc2, fieldFunc2)).call.apply(_instance, [
                    this,
                    0
                ].concat(_toConsumableArray(arr), [
                    3
                ])), _construct(_classPrivateMethodGet(this, _fieldFunc2, fieldFunc2), [
                    0
                ].concat(_toConsumableArray(arr), [
                    3
                ])), _classPrivateMethodGet(this, _fieldFunc2, fieldFunc2).bind(this)(_templateObject(), 1, 2), _classPrivateMethodGet(_ref = this.getInstance(), _fieldFunc2, fieldFunc2).bind(_ref)(_templateObject1(), 1, 2);
            }
        },
        {
            key: "getInstance",
            value: function() {
                return new A();
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), A;
}();
function fieldFunc() {
    return function() {
        this.x = 10;
    };
}
function fieldFunc2() {
    return function(a) {
        for(var _len = arguments.length, b = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)b[_key - 1] = arguments[_key];
    };
}
