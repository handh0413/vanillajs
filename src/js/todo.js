const todoInput = document.getElementById('todoInput');
const todoAddButton = document.getElementById('todoAddButton');
const todoList = document.getElementById('todoList');

function handleTodoInputKeydown(event) {
  if (event.key === 'Enter') {
    handleTodoAddButton();
  }
}

function handleTodoAddButton() {
  const newTodo = todoInput.value;
  if (newTodo === '') {
    return;
  }
  const todoListItem = createTodoListItem(newTodo);
  todoList.appendChild(todoListItem);
  todoInput.value = '';
}

function createTodoListItem(newTodo) {
  const todoListItem = document.createElement('div');
  todoListItem.className = 'todo-list-item';

  const todoCheckBox = document.createElement('div');
  todoCheckBox.className = 'checkbox';

  const checkboxBlankOutline = document.createElement('img');
  checkboxBlankOutline.src = 'icons/checkbox-blank-outline.svg';
  checkboxBlankOutline.alt = 'checkbox-blank-outline';

  const todoText = document.createElement('div');
  todoText.className = 'text';
  todoText.innerText = newTodo;

  todoCheckBox.appendChild(checkboxBlankOutline);
  todoCheckBox.appendChild(todoText);

  const todoRemove = document.createElement('div');
  todoRemove.className = 'remove';

  const removeCircleOutline = document.createElement('img');
  removeCircleOutline.src = 'icons/md-remove-circle-outline.svg';
  removeCircleOutline.alt = 'md-remove-circle-outline';
  removeCircleOutline.addEventListener('click', (event) => {
    if (event.target.closest('.remove')) {
      const itemToRemove = event.target.closest('.todo-list-item');
      todoList.removeChild(itemToRemove);
    }
  });

  todoRemove.appendChild(removeCircleOutline);

  todoListItem.appendChild(todoCheckBox);
  todoListItem.appendChild(todoRemove);
  return todoListItem;
}

todoAddButton.addEventListener('click', handleTodoAddButton);
todoInput.addEventListener('keydown', handleTodoInputKeydown);
