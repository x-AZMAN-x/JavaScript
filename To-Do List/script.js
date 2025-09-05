function addTask(){
    const taskText = document.getElementById("new_task").value.trim();
    if (taskText === ''){
        document.getElementById("result").innerHTML = "Please Enter Some Text.";
    }
    const todolist = document.getElementById("to_do_list");
    const li = document.createElement('li');
    li.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function(){
        todolist.removeChild(li);
    }
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    todolist.appendChild(li);
}