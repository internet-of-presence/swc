// checking subtype relations for function types as it relates to contextual signature instantiation
// error cases, so function calls will all result in 'any'
var Errors;
(function(Errors) {
    class Base {
    }
    class Derived extends Base {
    }
    class Derived2 extends Derived {
    }
    class OtherDerived extends Base {
    }
    var r1 = foo2((x)=>null
    ); // any
    var r1a = [
        (x)=>[
                ''
            ]
        ,
        (x)=>null
    ];
    var r1b = [
        (x)=>null
        ,
        (x)=>[
                ''
            ]
    ];
    var r2arg = (x)=>(r)=>null
    ;
    var r2arg2 = (x)=>(r)=>null
    ;
    var r2 = foo7(r2arg); // any
    var r2a = [
        r2arg2,
        r2arg
    ];
    var r2b = [
        r2arg,
        r2arg2
    ];
    var r3arg = (x, y)=>(r)=>null
    ;
    var r3arg2 = (x, y)=>(r)=>null
    ;
    var r3 = foo8(r3arg); // any
    var r3a = [
        r3arg2,
        r3arg
    ];
    var r3b = [
        r3arg,
        r3arg2
    ];
    var r4arg = (...x)=>null
    ;
    var r4arg2 = (...x)=>null
    ;
    var r4 = foo10(r4arg); // any
    var r4a = [
        r4arg2,
        r4arg
    ];
    var r4b = [
        r4arg,
        r4arg2
    ];
    var r5arg = (x, y)=>null
    ;
    var r5arg2 = (x, y)=>null
    ;
    var r5 = foo11(r5arg); // any
    var r5a = [
        r5arg2,
        r5arg
    ];
    var r5b = [
        r5arg,
        r5arg2
    ];
    var r6arg = (x, y)=>null
    ;
    var r6arg2 = (x, y)=>null
    ;
    var r6 = foo12(r6arg); // (x: Array<Base>, y: Array<Derived2>) => Array<Derived>
    var r6a = [
        r6arg2,
        r6arg
    ];
    var r6b = [
        r6arg,
        r6arg2
    ];
    var r7arg = (x)=>null
    ;
    var r7arg2 = (x)=>1
    ;
    var r7 = foo15(r7arg); // any
    var r7a = [
        r7arg2,
        r7arg
    ];
    var r7b = [
        r7arg,
        r7arg2
    ];
    var r7arg3 = (x)=>1
    ;
    var r7c = foo15(r7arg3); // (x: { a: string; b: number }) => number): number;
    var r7d = [
        r7arg2,
        r7arg3
    ];
    var r7e = [
        r7arg3,
        r7arg2
    ];
    var r8arg = (x)=>null
    ;
    var r8 = foo16(r8arg); // any
    var r9arg = (x)=>null
    ;
    var r9 = foo17(r9arg); // (x: { <T extends Derived >(a: T): T; <T extends Base >(a: T): T; }): any[]; (x: { <T extends Derived2>(a: T): T; <T extends Base>(a: T): T; }): any[];
})(Errors || (Errors = {}));
var WithGenericSignaturesInBaseType;
(function(WithGenericSignaturesInBaseType) {
    var r2arg2 = (x)=>[
            ''
        ]
    ;
    var r2 = foo2(r2arg2); // <T>(x:T) => T[] since we can infer from generic signatures now
    var r3arg2 = (x)=>null
    ;
    var r3 = foo3(r3arg2); // any
})(WithGenericSignaturesInBaseType || (WithGenericSignaturesInBaseType = {}));
