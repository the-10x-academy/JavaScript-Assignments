function getEven(arr) {
    var res = [];
    for(var i = 0; i < arr.length; i++){
       if (arr[i]%2===0){
           res.push(arr[i]);
       }
   }
    return res
}

function multiplyByN(arr, n) {
    var res = [];
    for(var i = 0; i < arr.length; i++){
        res.push(arr[i]*n)
    }
    return res;

}
function removeNthElement(arr, n) {
   arr.splice(n,1)
   return arr;
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}