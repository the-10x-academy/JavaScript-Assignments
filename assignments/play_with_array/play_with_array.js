function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   let arr2=[]
   for(let i=0; i<arr.length;i++){
       if(arr[i]%2==0){
           arr2.push(arr[i])
       }
   }
   return arr2

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   let l=[]
   for(let i=0;i<arr.length;i++){
       l.push(arr[i]*n)
   }
   return l;
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