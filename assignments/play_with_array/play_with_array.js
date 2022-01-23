function getEven(arr) {

    let result = []
   for(var i = 0; i < arr.length; i++){
       if (arr[i]%2 == 0){
           result.push(arr[i]);
       }
   }
   return result;
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * n
        }
        return arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
        arr.splice(n,1)
        return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}