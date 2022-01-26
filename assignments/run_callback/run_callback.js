function RunCallback(a, b, cb) {

    var add = a+b;
    return cb(add)
}

module.exports = RunCallback;
