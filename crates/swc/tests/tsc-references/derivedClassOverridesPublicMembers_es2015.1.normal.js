var x;
var y;
class Base {
    b(a) {}
    get c() {
        return x;
    }
    set c(v) {}
    static s(a) {}
    static get t() {
        return x;
    }
    static set t(v) {}
    constructor(a){}
}
class Derived extends Base {
    b(a) {}
    get c() {
        return y;
    }
    set c(v) {}
    static s(a) {}
    static get t() {
        return y;
    }
    static set t(a) {}
    constructor(a){
        super(x);
    }
}
var d = new Derived(y);
var r1 = d.a;
var r2 = d.b(y);
var r3 = d.c;
var r3a = d.d;
d.c = y;
var r4 = Derived.r;
var r5 = Derived.s(y);
var r6 = Derived.t;
var r6a = Derived.u;
Derived.t = y;
class Base2 {
}
class Derived2 extends Base2 {
}
var d2;
var r7 = d2[''];
var r8 = d2[1];
