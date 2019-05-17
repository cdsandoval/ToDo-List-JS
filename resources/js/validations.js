function validate() {
  //name
  if (document.todoform.field1.value == "") {
    alert("Please provide your name!");
    document.todoform.field1.focus();
    return false;
  }
  if (document.todoform.field2.value == "") {
    alert("Please provide your name!");
    document.todoform.field2.focus();
    return false;
  }
  // message
  if (document.todoform.field5.value == "") {
    alert("Please write a message!");
    document.todoform.field5.focus();
    return false;
  }
  // due date
  if (document.todoform.field6.value == "") {
    alert("Please determine a due date!");
    document.todoform.field6.focus();
    return false;
  }

  return true;
}
