
const URL='https://jsonplaceholder.typicode.com/todos';
async function getPosts(){
    const response=await fetch(URL);
    if(!response.ok){
        throw new error('something went wrong');

    }
    const data=response.json()
    return data;
    
}
getPosts().then((mydata)=>{
    console.log(mydata)
}).catch((error)=>{
    console.log('something bad happen');
    console.log(error)
})