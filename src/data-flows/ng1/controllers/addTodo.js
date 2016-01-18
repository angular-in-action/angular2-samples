angular.module('ng1todo').controller('AddTodo', AddTodoController);

function AddTodoController (TodoService) {
  this.todoService = TodoService;
}

AddTodoController.prototype.addTodo = function (todo) {
  this.todoService.add(todo);
}