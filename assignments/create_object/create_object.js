function CreateObject(arr) {
    // Write your code here
    let obj={}
    for(let i=0; i<arr.length-1;i++){
        if(i%2==0){
        
            obj[arr[i]]=arr[i+1];
        }
        
    }
    return obj;

}

module.exports = CreateObject;
