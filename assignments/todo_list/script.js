let count = 0;

document.querySelector('#addTodo').onclick = function(){
    
    
    let input = document.querySelector('#todoInput').value;
    if (input.length === 0)
    {
        alert("Please Enter a task");
    }
    else
    {
        document.querySelector('.todos').innerHTML += `
        <p key = ${count}>
        <span class = "task">
        ${input}
        </span>
        </p>
        `;

        count++;

        let currentTasks = document.querySelectorAll('.task');
        for ( let i = 0; i < currentTasks.length; i ++)
        {
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    }
    