var list_task = [
  {
    id: Date.now() + 45,
    message: "Hola",
    due_date: new Date("2019-05-18"),
    creation_date: new Date(),
    priority: false,
    complete: false
  },
  {
    id: Date.now() + 34,
    message: "Chao",
    due_date: new Date("2019-05-19"),
    creation_date: new Date(),
    priority: true,
    complete: false
  },
  {
    id: Date.now() + 1,
    message: "Me llamo Juan",
    due_date: new Date("2019-05-20"),
    creation_date: new Date(),
    priority: false,
    complete: false
  }
];
console.log("on");
function assignEvent() {
  let btnAddTask = document.getElementById("btnAddTask");
  btnAddTask.addEventListener("click", save_task);
  let dueDate = document.getElementById("dueDate");
  // dueDate.value = new Date();
  let columns = document.getElementsByClassName("colHeader");
  let nColumns = columns.length;
  for (let i = 0; i < nColumns; i++) {
    let propertyName = columns[i].getAttribute("data-column");
    columns[i].addEventListener(
      "click",
      sort_task.bind(null, columns[i], propertyName)
    );
  }
}

window.onload = function() {
  assignEvent();
};

function create_element(message, dueDate, levelPriority) {
  let format_message = message.charAt(0).toUpperCase() + message.slice(1);
  return {
    id: Date.now(),
    message: format_message,
    due_date: moment(dueDate, "YYYY-MM-DD"),
    creation_date: new Date(),
    priority: levelPriority,
    complete: false
  };
}

function validate(message, due_date) {
  if (message.value.trim().length == 0) {
    message.focus();
    return false;
  }

  if (due_date.value == "") {
    due_date.focus();
    return false;
  }
  return true;
}

function save_task() {
  event.preventDefault();
  var msg = document.getElementById("txtMessage");
  var due = document.getElementById("dueDate");
  var priority = document.getElementById("chkPriority");
  if (validate(msg, due)) {
    var new_element = create_element(msg.value, due.value, priority.checked);
    list_task.push(new_element);
    // sessionStorage.setItem("list", list_task);
    // console.log("Prueba");
    todo_list(list_task);
  }
}

function toggle_complete(element) {
  let identifier = element.getAttribute("data-value");
  list_task = list_task.map(function(row) {
    if (row["id"] == identifier) row["complete"] = !row["complete"];
    return row;
  });
  // sessionStorage.setItem("list", list_task);
}

function todo_list(list) {
  let string_to_date,
    formatted_due_date,
    formatted_creation_date,
    isCompleted = "";
  let listContainer = document.getElementById("list1");
  for (let index in list) {
    string_to_date = moment(list[index].due_date).format();
    formatted_due_date = moment(string_to_date).format("L");
    formatted_creation_date = moment(list[index].creation_date).format("L");
    isCompleted = "";

    if (list[index].complete) isCompleted = "checked";
    listContainer.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="container">
    <span>
      <input type="checkbox" class="item"
             data-value="${list_task[index].id}"
             onclick="toggle_complete(this)" ${isCompleted}/>
    </span>
    <span class="item message">${list_task[index].message}</span>
    <span class="item">${formatted_due_date}</span>
    <span class="item">${formatted_creation_date}</span>
    <span class="item">${list_task[index].priority}</span>
    </li>
    `
    );
  }
}

function sort_task(element, column) {
  let columns = document.getElementsByClassName("colHeader");
  let nColumns = columns.length;
  for (let i = 0; i < nColumns; i++) {
    if (columns[i] != element) {
      columns[i].innerHTML = columns[i].innerHTML
        .replace(" ▲", "")
        .replace(" ▼", "");
      columns[i].setAttribute("data-order", "0");
    }
  }

  if (list_task.length > 0) {
    let state = element.getAttribute("data-order");
    let nameCol = element.getAttribute("data-name");
    list_task.sort(function(a, b) {
      if (a[column] < b[column]) return 1;
      if (a[column] > b[column]) return -1;
      return 0;
    });
    if (state == "1") {
      list_task.reverse();
      element.setAttribute("data-order", "0");
      element.innerHTML = nameCol + " ▼";
    } else {
      element.setAttribute("data-order", "1");
      element.innerHTML = nameCol + " ▲";
    }
    document.getElementById("list1").innerHTML = "";
    todo_list(list_task);
  }
}
