const todoInput = document.getElementById('todoInput');
const todoAddButton = document.getElementById('todoAddButton');
const todoList = document.getElementById('todoList');

const TODOS_KEY = 'todos';
let todos = [];

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((todo) => {
    addTodoListItem(todo);
  });
}

todoAddButton.addEventListener('click', handleTodoAddButton);
todoInput.addEventListener('keydown', handleTodoInputKeydown);

function handleTodoInputKeydown(event) {
  if (event.key === 'Enter') {
    handleTodoAddButton();
  }
}

function handleTodoAddButton() {
  const todoText = todoInput.value;
  if (todoText === '') {
    return;
  }
  const todo = {
    id: Date.now(),
    text: todoText,
    done: true,
  };
  addTodoListItem(todo);
  todoInput.value = '';
}

function addTodoListItem(todo) {
  const todoListItem = createTodoListItem(todo);
  todoList.appendChild(todoListItem);
  todos.push(todo);
  saveTodos();
}

function createTodoListItem(todo) {
  const todoListItem = document.createElement('div');
  todoListItem.className = 'todo-list-item';
  todoListItem.id = todo.id;

  const todoCheckBox = document.createElement('div');
  todoCheckBox.className = 'checkbox';

  const checkBoxOutline = document.createElement('img');
  if (todo.done) {
    checkBoxOutline.src = 'icons/checkbox-marked-outline.svg';
    checkBoxOutline.alt = 'checkbox-marked-outline';
  } else {
    checkBoxOutline.src = 'icons/checkbox-blank-outline.svg';
    checkBoxOutline.alt = 'checkbox-blank-outline';
  }

  const todoText = document.createElement('div');
  todoText.className = 'text';
  todoText.innerText = todo.text;

  todoCheckBox.appendChild(checkBoxOutline);
  todoCheckBox.appendChild(todoText);

  const todoRemove = document.createElement('div');
  todoRemove.className = 'remove';

  const removeCircleOutline = document.createElement('img');
  removeCircleOutline.src = 'icons/md-remove-circle-outline.svg';
  removeCircleOutline.alt = 'md-remove-circle-outline';
  removeCircleOutline.addEventListener('click', handleTodoRemove);

  todoRemove.appendChild(removeCircleOutline);

  todoListItem.appendChild(todoCheckBox);
  todoListItem.appendChild(todoRemove);
  return todoListItem;
}

function handleTodoRemove(event) {
  if (event.target.closest('.remove')) {
    const itemToRemove = event.target.closest('.todo-list-item');
    todos = todos.filter((todo) => todo.id !== parseInt(itemToRemove.id));
    todoList.removeChild(itemToRemove);
    saveTodos();
  }
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
