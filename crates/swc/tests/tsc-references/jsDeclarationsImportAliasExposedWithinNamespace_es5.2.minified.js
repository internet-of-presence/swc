var myTypes = {};
var testFnTypes = {};
function testFn(input) {
    return "number" == typeof input ? 2 * input : null;
}
export { myTypes, testFn, testFnTypes };
