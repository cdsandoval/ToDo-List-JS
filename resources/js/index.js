const list_task = [
  {
    id: Date.now(),
    message: "Estudiar asdasd",
    due_date: new Date("2017-06-12"),
    creation_date: new Date(),
    priority: true,
    complete: false
  },
  {
    id: Date.now(),
    message: "Hacer Miniassignment",
    due_date: new Date("2019-06-12"),
    creation_date: new Date(),
    priority: false,
    complete: false
  }
];

function save_taks() {
  var msg = "Lavar la ropa";
  var due = new Date("2019-07-12");
  var prior = false;
  var new_element = create_element(msg, due, prior);
  list_task.push(new_element);
  sessionStorage.setItem("list", list_task);
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

console.log(list_task);
console.log("-----------------");
save_taks();
console.log(list_task);

function toggle_complete(element) {
  let identifier = element.getAttribute("data-value");
  list_task = list_task.map(function(row) {
    if (row["id"] == identifier) row["complete"] = !row["complete"];

    return row;
  });
  sessionStorage.setItem("list", list_task);
}
