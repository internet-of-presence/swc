function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
// @filename: t3.ts
import { I1 as I, N1 as N, T1 as T } from "./t1";
// @target: es6
// @module: commonjs
// @filename: t1.ts
export var v = 1;
export function f() {}
export var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
export var E;
(function(E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
    E[E["C"] = 2] = "C";
})(E || (E = {}));
export var D;
(function(D) {
    D[D["A"] = 0] = "A";
    D[D["B"] = 1] = "B";
    D[D["C"] = 2] = "C";
})(D || (D = {}));
export var M;
(function(M1) {
    var x;
    M1.x = x;
})(M || (M = {}));
export var a = M.x;
export { v as v1, f as f1, C as C1, E as E1, D as D1, a as a1 };
// @filename: t2.ts
export { v1 as v, f1 as f, C1 as C, I1 as I, E1 as E, D1 as D, M1 as M, N1 as N, T1 as T, a1 as a } from "./t1";
export { v, f, C, E, D, a };
