const myform=document.querySelector(".todo-container");
const myinput=document.querySelector(".textinput");
const todolist=document.querySelector(".todolist")
myform.addEventListener("submit",(e)=>{
    const newtodolist=myinput.value
    const newli=document.createElement('Li')
    const newliinnerHtml=
   `<span class="text">${newtodolist}</span>
   <div class="todo-btn">
       <button class="todo-buttons done">Done</button>
       <button class="todo-buttons remove">Remove</button>
   </div>` 
   newli.innerHTML=newliinnerHtml;
   todolist.append(newli)
    e.preventDefault()
    myinput.value=''


})
todolist.addEventListener('click',(e)=>{
   
    if(e.target.classList.contains('remove')){
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains('done')){
        const lispan=e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration='Line-through'
    }
})