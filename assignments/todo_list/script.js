let count = 0;
document.querySelector("#add_toDo").onclick = function () {
  let input = document.querySelector("#todo_input").value;
  if (input.length > 0) {
      document.querySelector(".todos").innerHTML += `
       <p key = ${count}>
       <span class = "task">
       ${input}
       </span>
       </p>
       `;count++;
      document.querySelector("#todo_input").value = "";
      let currentTask = document.querySelectorAll(".task");
      for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    };
  };
};
