function CreateObject(arr) {
    // Write your code here
    const obj = {};

    for (let i = 0; i < arr.length - 1; i+=2)
    {
        obj[arr[i]] = arr[i+1]; 
    }

    return obj;
}

module.exports = CreateObject;
