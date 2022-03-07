function CreateObject(arr) {
    // Write your code here
    const obj={};
    for(let i=0;i<arr.length;i=i+2){
        key=arr[i];
        value=arr[i+1];
        obj[key]=value;

    }
    return obj;
}

module.exports = CreateObject;
