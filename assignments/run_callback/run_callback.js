function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
let add = a + b;
return cb(add)}

module.exports = RunCallback;
