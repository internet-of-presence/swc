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
// @strict: true
function foo() {
    return /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            _classCallCheck(this, _class);
        }
        _createClass(_class, [
            {
                key: "foo",
                value: function foo(v) {
                    return v;
                }
            }
        ]);
        return _class;
    })();
}
var C = foo();
C.a;
C.a = 1;
C[2];
C[2] = 42;
var c = new C();
c.foo(1);
