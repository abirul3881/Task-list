const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  // Получаем название задачи и инпута
  const taskText = todoInput.value;

  // Создаем тег li через разметку
  // const newTask = `<li>${taxtText}</li>`;

  // Добавляем разметку на страницу
  // todoList.insertAdjacentHTML("beforeend", li);
  const newTask = document.createElement("li");
  newTask.innerText = taskText;

  //  Создаем кнопку удалить
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "Удалить";
  deleteBtn.style["margin-left"] = "15px";
  newTask.append(deleteBtn);
  // Добавляем событие по клику
  deleteBtn.addEventListener("click", function () {
    this.closest("li").remove();
  });
  // Добавляем элемент на страницу
  todoList.append(newTask);

  // Очищаем поле ввода
  todoInput.value = "";

  // Фокус на поле ввода
  todoInput.focus();
}
