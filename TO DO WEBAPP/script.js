
let newTask = document.querySelector('#new-task');
let form = document.querySelector('.form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// function

const createTask = (task) => {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    checkbox.type = 'checkbox';
    label.innerText = ` ${task}`;

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
}

const addTask = (event) => {
    event.preventDefault();
    let li = createTask(newTask.value);
    todoUl.appendChild(li);

    newTask.value = "";

    // When new list item is complete
    completeTask(li);
}

let completeTask = function(li) {
    let checkbox = li.querySelector('input[type="checkbox"]');

    checkbox.addEventListener("change", function(){
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.className = 'delete';

        todoUl.removeChild(li);
        checkbox.remove();
        li.appendChild(deleteBtn);
        completeUl.appendChild(li);

        // When list items move to complete task div
        deleteTask(li);
    })
}

let deleteTask = function (li) {
    let deleteBtn = li.querySelector('button');

    deleteBtn.addEventListener("click", function(){
        completeUl.removeChild(li);
    })
}

// when existing list item has to complete in incomplete task div
for(let i=0; i < todoUl.children.length; i++){
    completeTask(todoUl.children[i]);
}

// for delete existing list item
for(let i=0; i < completeUl.children.length; i++){
    deleteTask(completeUl.children[i]);
}

form.addEventListener("submit", addTask);