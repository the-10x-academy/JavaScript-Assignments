function CreateObject(arr) {
    // Write your code here
    let object = {};
    for (let i = 0; i < arr.length; i = i + 2){
        object[arr[i]] = arr[i + 1];
    }
    return object
}

module.exports = CreateObject;
