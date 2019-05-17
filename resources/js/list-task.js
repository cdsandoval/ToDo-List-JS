// let todoItems = [
//   {
//     id: Date.now(),
//     message: "Hacer Miniassignment",
//     due_date: new Date("2019-06-12"),
//     creation_date: new Date(),
//     priority: false,
//     complete: false
//   }
// ];

// function addTodo() {
//   const todo = {
//     id: Date.now(),
//     message: "Estudiar asdasd",
//     due_date: new Date("2017-06-12"),
//     creation_date: new Date(),
//     priority: true,
//     complete: false
//   };

//   console.log("hola");
//   todoItems.push(todo);

//   const formatted_due_date = moment(todo.due_date).format("L");

//   const formatted_creation_date = moment(todo.creation_date).format("L");

//   const listContainer = document.getElementById("list-task");
//   listContainer.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <ul class="list1">
//         <input type="checkbox" />
//         <li>
//           <span>${todo.id}</span>
//         </li>
//         <li>
//           <span>${todo.message}</span>
//         </li>
//         <li>
//           <span>${formatted_due_date}</span>
//         </li>
//         <li>
//           <span>${formatted_creation_date}</span>
//         </li>
//         <li>
//           <span>${todo.priority}</span>
//         </li>
//         <li>
//           <span>${todo.complete}</span>
//         </li>
//     </ul>
//   `
//   );
// }

// document.getElementById("button").addEventListener("click", event => {
//   event.preventDefault();
//   addTodo();
// });
