var todos = ['Buy some eggs', 'Code Javscript', 'Read Audiobook'];
var todoElement = document.getElementById('todoList');

var loadTodo = function(){
  todoElement.innerHTML = '';
  for(var i = 0; i<todos.length; i++){
    todoElement.innerHTML += i+1 + ". " + todos[i] + "<br/>";
  }
};

var addTodo = function(){
  var todoItem = prompt("What task you want to do?");
  todos.push(todoItem);
  loadTodo();
};

var removeTodo = function(){
  var todoItemDone = prompt("Which todo Item do you want to remove?");
  todos.splice(todoItemDone-1,1);
  loadTodo();
}

loadTodo();