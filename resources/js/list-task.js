let hash = [];

let listContainer = document.getElementById("list-task");

list = () => {
  hash.push({
    message: "escribir",
    created_date: "66/66/6666",
    due_date: "55/55/5555",
    priority: "NO"
  });

  let listElement = document.createElement("ul");
  hash.forEach((key, index) => {
    Object.keys(key).map(k => {
      console.log(hash[index][k]);
      let listItem = document.createElement("li");
      listItem.innerHTML = `${hash[index][k]}`;
      listElement.appendChild(listItem);
      listContainer.appendChild(listElement);
    });
  });
};

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  };

  todoItems.push(todo);

  const list = document.getElementById("list-task");
  list.insertAdjacentHTML(
    "afterbegin",
    `
    <ul><li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>     
    </li><li>hola</li><li>adios</li></ul>
  `
  );
}

document.getElementById("button").addEventListener("click", event => {
  event.preventDefault();

  const text = Date.now();

  addTodo(text);
});
