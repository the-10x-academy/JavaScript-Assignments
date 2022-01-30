function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result

    var sum = a + b;
    var result = cb(sum);
    return result

}

module.exports = RunCallback;
