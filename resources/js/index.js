var list_task = [];

function assignEvent() {
  let btnAddTask = document.getElementById("btnAddTask");
  btnAddTask.addEventListener("click", save_task);
  let dateDue = document.getElementById("dateDue");
  // dateDue.value = new Date();
}

window.onload = function() {
  // let list = sessionStorage.getItem("list");
  // console.log(Object.values(list));
  // if (list != null) list_task = Object.getOwnPropertyNames(list);
  // console.log(list_task);
  assignEvent();
};

function save_task() {
  var msg = document.getElementById("txtMessage").value;
  var due = document.getElementById("dateDue").value;
  var priority = document.getElementById("chkPriority").checked;
  var new_element = create_element(msg, due, priority);
  list_task.push(new_element);
  // sessionStorage.setItem("list", list_task);
  // console.log("Prueba");
  return new_element;
}

function create_element(message, dueDate, levelPriority) {
  return {
    id: Date.now(),
    message: message,
    due_date: dueDate,
    creation_date: new Date(),
    priority: levelPriority,
    complete: false
  };
}

function toggle_complete(element) {
  let identifier = element.getAttribute("data-value");
  list_task = list_task.map(function(row) {
    if (row["id"] == identifier) row["complete"] = !row["complete"];

    return row;
  });
  sessionStorage.setItem("list", list_task);
}

function todo_list() {
  let element = save_task();
  let string_to_date = moment(element.due_date).format();
  const formatted_due_date = moment(string_to_date).format("L");
  const formatted_creation_date = moment(element.creation_date).format("L");
  const listContainer = document.getElementById("list1");

  listContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <li class="description">
    <span><input type="checkbox"/></span>
    <span class="message">${element.message}</span>
    <span class="due create">${formatted_due_date}</span>
    <span class="creation-date">${formatted_creation_date}</span>
    <span class="priority">${element.priority}</span>
    </li>
    `
  );
}

document.getElementById("btnAddTask").addEventListener("click", event => {
  event.preventDefault();
  todo_list();
});
