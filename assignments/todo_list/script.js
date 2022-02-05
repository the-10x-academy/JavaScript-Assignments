let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click',function(){

//     var paragraph = document.createElement('p');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value='';
//     paragraph.addEventListener('click', function(){
//         toDoContainer.removeChild(paragraph);

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    headers: {
         'Accept': 'application/json',
      'Content-Type': 'application/json',
          },
      })
    .then(result => result.json())
    .then(result => {console.log(result)})
    .catch(error => console.log(error));
    


