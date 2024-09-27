const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(e) {
    e.preventDefault(); 
    const taskText = todoInput.value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = ' Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = '';
}

todoForm.addEventListener('submit', addTodo);
