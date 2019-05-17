function validate() {
  // message
  if (document.todoForm.field5.value == "") {
    alert("Please write a message!");
    document.todoForm.field5.focus();
    return false;
  }
  // due date
  if (document.todoForm.dueDate.value == "") {
    alert("Please determine a due date!");
    document.todoForm.dueDate.focus();
    return false;
  }
  return true;
}
