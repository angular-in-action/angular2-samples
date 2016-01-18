angular.module('ng1todo').controller('TodoList', TodoListController);

function TodoListController (TodoService) {
  this.todoService = TodoService;
  this.todos = this.todoService.todos;
}

TodoListController.prototype.toggleTodo = function (todo) {
  this.todoService.toggle(todo);
}