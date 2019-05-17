var list_task = [];

function assignEvent() {
  let btnAddTask = document.getElementById("btnAddTask");
  btnAddTask.addEventListener("click", save_task);
}

window.onload = function() {
  // let list = sessionStorage.getItem("list");
  // console.log(Object.values(list));
  // if (list != null) list_task = Object.getOwnPropertyNames(list);
  // console.log(list_task);
  assignEvent();
};

function save_task() {
  event.preventDefault();
  var msg = document.getElementById("txtMessage");
  var due = document.getElementById("dateDue");
  var priority = false;
  var new_element = create_element(msg, due, priority);
  list_task.push(new_element);
  // sessionStorage.setItem("list", list_task);
  // console.log("Prueba");
  console.log(list_task);
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
