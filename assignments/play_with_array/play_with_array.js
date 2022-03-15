function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   let arr2 = []
   for (i = 0; i < arr.length; i ++){
       if(arr[i] % 2 == 0){
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
   let arr3 = []
   for(i= 0; i < arr.length; i++ ){
       arr3.push(arr[i] * n)
   }
   return arr3
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
  
    arr.splice(n, 1)
   return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}