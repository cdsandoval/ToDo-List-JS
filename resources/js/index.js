const list_task = [
  {
    message: "Estudiar asdasd",
    due_date: Date.parse("2017-06-12"),
    creation_date: Date.now(),
    priority: true
  },
  {
    message: "Hacer Miniassignment",
    due_date: Date.parse("2019-06-12"),
    creation_date: Date.now(),
    priority: false
  }
];

function save_taks() {
  var msg = "Lavar la ropa";
  var due = Date.parse("2019-07-12");
  var current_date = Date.now();
  var prior = false;
  var new_element = {
    message: msg,
    due_date: due,
    creation_date: current_date,
    priority: prior
  }
  list_task.push(new_element);
  sessionStorage.setItem('list',list_task);
}

console.log(list_task);
save_taks();
console.log(list_task);