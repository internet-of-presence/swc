function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _throw(e) {
    throw e;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// @target: es5
(function() {
    var f = function f() {
        var ref9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a, ref9 = ref9 !== null ? ref9 : _throw(new TypeError("Cannot destructure undefined")), ref2 = _slicedToArray(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, 0), ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a, tmp1 = ref3.p, ref4 = tmp1 === void 0 ? a : tmp1, ref4 = ref4 !== null ? ref4 : _throw(new TypeError("Cannot destructure undefined"));
        return function() {
            var ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a, ref = ref !== null ? ref : _throw(new TypeError("Cannot destructure undefined")), ref6 = _slicedToArray(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, 0), ref7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a, tmp = ref7.p, ref8 = tmp === void 0 ? a : tmp, ref8 = ref8 !== null ? ref8 : _throw(new TypeError("Cannot destructure undefined"));
            return a;
        };
    };
    var a;
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined"));
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined"));
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined"));
    var _a = _slicedToArray(a, 0);
    var _a1 = _slicedToArray(a, 0);
    var _a2 = _slicedToArray(a, 0);
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined")), _a3 = _slicedToArray(a, 0);
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined")), _a4 = _slicedToArray(a, 0);
    var a = a !== null ? a : _throw(new TypeError("Cannot destructure undefined")), _a5 = _slicedToArray(a, 0);
    var _p1 = a.p1, _p1 = _p1 !== null ? _p1 : _throw(new TypeError("Cannot destructure undefined")), _p2 = _slicedToArray(a.p2, 0);
    var _p11 = a.p1, _p11 = _p11 !== null ? _p11 : _throw(new TypeError("Cannot destructure undefined")), _p21 = _slicedToArray(a.p2, 0);
    var _p12 = a.p1, _p12 = _p12 !== null ? _p12 : _throw(new TypeError("Cannot destructure undefined")), _p22 = _slicedToArray(a.p2, 0);
    for(var ref5 = {}, ref5 = ref5 !== null ? ref5 : _throw(new TypeError("Cannot destructure undefined")), ref1 = {}, ref1 = ref1 !== null ? ref1 : _throw(new TypeError("Cannot destructure undefined")); false; void 0){}
})();
(function() {
    var ns = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = ns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _value = _step.value, _value = _value !== null ? _value : _throw(new TypeError("Cannot destructure undefined"));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = ns[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _value1 = _step1.value, _value1 = _value1 !== null ? _value1 : _throw(new TypeError("Cannot destructure undefined"));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = ns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var _value2 = _step2.value, _value2 = _value2 !== null ? _value2 : _throw(new TypeError("Cannot destructure undefined"));
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator3 = ns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
            var _value3 = _slicedToArray(_step3.value, 0);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
    try {
        for(var _iterator4 = ns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
            var _value4 = _slicedToArray(_step4.value, 0);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
            }
        } finally{
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
    var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
    try {
        for(var _iterator5 = ns[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
            var _value5 = _slicedToArray(_step5.value, 0);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
            }
        } finally{
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
})();
