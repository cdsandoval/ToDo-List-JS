let hash = [
  {
    message: "estudiar",
    created_date: "22/22/2222",
    due_date: "11/11/1111",
    priority: "YES"
  },
  {
    message: "leer",
    created_date: "33/33/3333",
    due_date: "44/44/4444",
    priority: "YES"
  },
  {
    message: "escribir",
    created_date: "66/66/6666",
    due_date: "55/55/5555",
    priority: "NO"
  },
  {
    message: "estudiar",
    created_date: "22/22/2222",
    due_date: "11/11/1111",
    priority: "YES"
  },
  {
    message: "leer",
    created_date: "33/33/3333",
    due_date: "44/44/4444",
    priority: "YES"
  },
  {
    message: "escribir",
    created_date: "66/66/6666",
    due_date: "55/55/5555",
    priority: "NO"
  }
];

// for (let i = 0; i < hash.length; i++) {
//   // let message = `${hash[i].message} - ${hash[i].created_date} - ${
//   //   hash[i].due_date
//   // } - ${hash[i].priority}`;
//   let list_task = document.getElementById("list-task");
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(`${hash[i].message}`));
//   list_task.appendChild(li);
// }

var listContainer = document.getElementById("list-task");

for (i = 0; i < hash.length; i++) {
  var listElement = document.createElement("ul");
  listContainer.appendChild(listElement);
  var listItem = document.createElement("li");
  var listItem2 = document.createElement("li");
  var listItem3 = document.createElement("li");
  var listItem4 = document.createElement("li");

  listItem.innerHTML = hash[i].message;
  listItem2.innerHTML = hash[i].created_date;
  listItem3.innerHTML = hash[i].due_date;
  listItem4.innerHTML = hash[i].priority;

  listElement.appendChild(listItem);
  listElement.appendChild(listItem2);
  listElement.appendChild(listItem3);
  listElement.appendChild(listItem4);
}
