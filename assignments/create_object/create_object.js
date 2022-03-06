function CreateObject(arr) {
    // Write your code here
    let keys=[],
        values=[],
        obj={};
    for(let i=0;i<arr.length;i++){
        if(i%2===0){
            keys.push(arr[i])
        }
        else{
            values.push(arr[i])
        }
    }
    for(let i=0;i<keys.length;i++){
        obj[keys[i]]=values[i];
    }
    return obj;
}

module.exports = CreateObject;
const arr=["firstName","Yash","lastName","Goyal"];
