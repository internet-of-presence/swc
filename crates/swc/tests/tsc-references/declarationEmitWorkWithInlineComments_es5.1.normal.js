function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
// @declaration: true
// @stripInternal:true
export var Foo = function Foo(isInternal1, isInternal2, isInternal3, isInternal4, isInternal5, isInternal6 /* trailing */ , isInternal7, notInternal1, notInternal2, notInternal3) {
    "use strict";
    _classCallCheck(this, Foo);
    this.isInternal1 = isInternal1;
    this.isInternal2 = isInternal2;
    this.isInternal3 = isInternal3;
    this.isInternal4 = isInternal4;
    this.isInternal5 = isInternal5;
    this.isInternal6 = isInternal6;
    this.isInternal7 = isInternal7;
    this.notInternal1 = notInternal1;
    this.notInternal2 = notInternal2;
    this.notInternal3 = notInternal3;
};
export var Bar = function Bar(isInternal1) {
    "use strict";
    _classCallCheck(this, Bar);
    this.isInternal1 = isInternal1;
};
export var Baz = function Baz(isInternal) {
    "use strict";
    _classCallCheck(this, Baz);
    this.isInternal = isInternal;
};
