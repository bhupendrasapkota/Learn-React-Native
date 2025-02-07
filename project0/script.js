const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let uncheckedCount = 0; // Keep track of unchecked items

function newTodo() {
  const inputvalue = prompt("Enter the task you want to add");
  if (!inputvalue) return;

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = classNames.TODO_CHECKBOX

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      uncheckedCount--; // Decrease unchecked count when checked
    } else {
      uncheckedCount++; // Increase unchecked count when unchecked
    }
    updateCounts();
  })

  const text = document.createElement('span')
  text.className = classNames.TODO_TEXT
  text.textContent = inputvalue

  const deleteButton = document.createElement('button')
  deleteButton.className = classNames.TODO_DELETE
  deleteButton.textContent = 'Delete'

  deleteButton.addEventListener('click', () => {
    li.remove()
    itemCountSpan.textContent--; // Decrease total count
    if (!checkbox.checked) uncheckedCount--; // Adjust unchecked count if the item was unchecked
    updateCounts();
  })

  li.appendChild(checkbox)
  li.appendChild(text)
  li.appendChild(deleteButton)

  list.appendChild(li)
  itemCountSpan.textContent++; // Increase item count when a new todo is added
  uncheckedCount++; // Increment unchecked count for the new todo
  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = list.getElementsByTagName('li').length;
  uncheckedCountSpan.textContent = uncheckedCount;
}
