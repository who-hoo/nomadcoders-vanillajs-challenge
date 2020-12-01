// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoInput = document.querySelector("#toDoInput"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list"),
  TODOS = {
    PENDING: JSON.parse(localStorage.getItem("PENDING")) || [],
    FINISHED: JSON.parse(localStorage.getItem("FINISHED")) || []
  };

function setLocalStorage(name, item = null) {
  item && TODOS[name].push(item);
  localStorage.setItem(name, JSON.stringify(TODOS[name]));
}

function handleDeleteButtonClick(id, name) {
  TODOS[name] = TODOS[name].filter((item) => item.id !== id);
  setLocalStorage(name);
}

function swapTask(parent, name) {
  const parentItem = {
    id: parent.id,
    task: parent.firstChild.textContent
  };

  setLocalStorage(name, parentItem);

  if (name === "FINISHED") {
    pendingList.removeChild(parent);
    finishedList.appendChild(createTodoElement(parentItem, false));
  } else {
    finishedList.removeChild(parent);
    pendingList.appendChild(createTodoElement(parentItem, true));
  }
}

function createTodoElement(item, isPending) {
  const element = document.createElement("li"),
    span = document.createElement("span"),
    deleteButton = document.createElement("button"),
    moveButton = document.createElement("button");

  span.innerText = item.task;
  deleteButton.innerText = "❌";
  moveButton.innerText = isPending ? "✅" : "🔙";

  deleteButton.addEventListener("click", () => {
    handleDeleteButtonClick(item.id, isPending ? "PENDING" : "FINISHED");
    isPending
      ? pendingList.removeChild(element)
      : finishedList.removeChild(element);
  });
  moveButton.addEventListener("click", () => {
    handleDeleteButtonClick(item.id, isPending ? "PENDING" : "FINISHED");
    swapTask(element, isPending ? "FINISHED" : "PENDING");
  });

  element.id = item.id;
  element.appendChild(span);
  element.appendChild(deleteButton);
  element.appendChild(moveButton);

  return element;
}

function handleEnterKeyPress(event) {
  if (event.key === "Enter" && event.keyCode === 13) {
    const newTask = {
      id: Date.now(),
      task: event.target.value
    };

    setLocalStorage("PENDING", newTask);

    const toDoElement = createTodoElement(newTask, true);
    pendingList.appendChild(toDoElement);

    toDoInput.value = "";
  }
}

function init() {
  toDoInput.addEventListener("keypress", handleEnterKeyPress);

  TODOS["PENDING"].map((item) => {
    const pendingElement = createTodoElement(item, true);
    pendingList.appendChild(pendingElement);
  });

  TODOS["FINISHED"].map((item) => {
    const finishedElement = createTodoElement(item, false);
    finishedList.appendChild(finishedElement);
  });
}

init();
