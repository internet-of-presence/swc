function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
var C1 = function() {
    "use strict";
    function C1(x) {
        _classCallCheck(this, C1);
    }
    return _createClass(C1, [
        {
            key: "f",
            value: function(x) {}
        }
    ]), C1;
}(), C2 = function() {
    "use strict";
    _classCallCheck(this, C2);
}, C3 = function() {
    "use strict";
    _classCallCheck(this, C3);
}, C4 = function() {
    "use strict";
    function C4() {
        var _this = this;
        _classCallCheck(this, C4), this.x1 = {
            a: this
        }, this.x2 = [
            this
        ], this.x3 = [
            {
                a: this
            }
        ], this.x4 = function() {
            return _this;
        };
    }
    return _createClass(C4, [
        {
            key: "f1",
            value: function() {
                return {
                    a: this
                };
            }
        },
        {
            key: "f2",
            value: function() {
                return [
                    this
                ];
            }
        },
        {
            key: "f3",
            value: function() {
                return [
                    {
                        a: this
                    }
                ];
            }
        },
        {
            key: "f4",
            value: function() {
                var _this = this;
                return function() {
                    return _this;
                };
            }
        }
    ]), C4;
}();
