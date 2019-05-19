var list_task = [];

function assignEvent() {
  let btnAddTask = document.getElementById("btnAddTask");
  btnAddTask.addEventListener("click", addTask);

  let btnSearch = document.getElementById("btnSearch");
  btnSearch.addEventListener("click", filterTask);

  let columns = document.getElementsByClassName("colHeader");
  let nColumns = columns.length;
  for (let i = 0; i < nColumns; i++) {
    let propertyName = columns[i].getAttribute("data-column");
    columns[i].addEventListener(
      "click",
      sortTask.bind(null, columns[i], propertyName)
    );
  }
}

function createTask(message, dueDate, levelPriority) {
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

function validateTask(message, due_date) {
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

function listTask(list) {
  let formatted_due_date, formatted_creation_date, isCompleted;
  let listContainer = document.getElementById("list1");
  listContainer.innerHTML = "";
  for (let index in list) {
    formatted_due_date = moment(list[index].due_date).format("L");
    formatted_creation_date = moment(list[index].creation_date).format("L");
    isCompleted = "";
    star = "fa fa-star-o";
    if (list[index].priority) star = "fa fa-star";

    if (list[index].complete) isCompleted = "checked";
    listContainer.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="container">
    
      <div class="item checkbox"><input type="checkbox" 
             data-value="${list[index].id}"
             onclick="completeTask(this)" ${isCompleted}/></div>
    
    <span class="item message">${list[index].message}</span>
    <span class="item">${formatted_due_date}</span>
    <span class="item">${formatted_creation_date}</span> 
    <span class="item"><i class="${star}"></i></span>
    <button class="item checkbox empty btn"
            data-value="${list[index].id}"
            onclick="deleteTask(this)">
      <i class="fa fa-trash"></i>
    </button>
    </li>
    `
    );
  }
}

function addTask() {
  event.preventDefault();
  var msg = document.getElementById("txtMessage");
  var due = document.getElementById("dueDate");
  var priority = document.getElementById("chkPriority");
  if (validateTask(msg, due)) {
    var new_element = createTask(msg.value, due.value, priority.checked);
    list_task.push(new_element);
    listTask(list_task);
  }
}

function completeTask(element) {
  let identifier = element.getAttribute("data-value");
  list_task = list_task.map(function(row) {
    if (row["id"] == identifier) row["complete"] = !row["complete"];
    return row;
  });
}

function sortTask(element, column) {
  let columns = document.getElementsByClassName("colHeader");
  let nColumns = columns.length - 1;
  for (let i = 1; i < nColumns; i++) {
    if (columns[i] != element) {
      columns[i].innerHTML = columns[i].getAttribute("data-name") + " ↕";
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
      element.innerHTML = nameCol + " ↓";
    } else {
      element.setAttribute("data-order", "1");
      element.innerHTML = nameCol + " ↑";
    }
    document.getElementById("list1").innerHTML = "";
    listTask(list_task);
  }
}

window.onload = function() {
  let dueDate = document.getElementById("dueDate");
  dueDate.value = moment().format("YYYY-MM-DD");
  assignEvent();
};

//Features Additional

function filterTask() {
  event.preventDefault();
  let searched = document
    .getElementById("txtSearch")
    .value.toLowerCase()
    .trim();
  console.log(searched);
  let list_filtered = [];
  list_task.forEach(function(element) {
    console.log(element["message"]);
    if (element["message"].toLowerCase().indexOf(searched) > -1) {
      console.log(element["message"].toLowerCase().indexOf(searched));
      list_filtered.push(element);
    }
  });
  listTask(list_filtered);
}

function deleteTask(element) {
  let identifier = element.getAttribute("data-value");
  let nList = list_task.length;
  for (let i = 0; i < nList; i++) {
    if (list_task[i]["id"] == identifier) {
      list_task.splice(i, 1);
      break;
    }
  }
  listTask(list_task);
}
