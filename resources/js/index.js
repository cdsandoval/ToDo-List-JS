var list_task = [
  {
    id: Date.now(),
    message: "Hola",
    due_date: new Date("2019-05-18"),
    creation_date: new Date(),
    priority: false,
    complete: false
  },
  {
    id: Date.now(),
    message: "Chao",
    due_date: new Date("2019-05-19"),
    creation_date: new Date(),
    priority: true,
    complete: false
  },
  {
    id: Date.now(),
    message: "Me llamo Juan",
    due_date: new Date("2019-05-20"),
    creation_date: new Date(),
    priority: false,
    complete: false
  }
];

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
  event.preventDefault();
  var msg = document.getElementById("txtMessage").value;
  var due = document.getElementById("dateDue").value;
  var priority = document.getElementById("chkPriority").checked;
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

function sort_task(this, column) {
  if (list_task.length > 0) {
    let state = this.getAttribute("data-order");
    list_task.sort(function(a, b) {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return -1;
      return 0;
    });
    if (state == "1") list_task.reverse();
  }
}
