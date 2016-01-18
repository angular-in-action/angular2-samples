angular.module('ng1todo').factory('TodoService', TodoService);

function TodoService () {
	return {
		todos: [
			{title: "Read the todo list", completed: true},
			{title: "Look at the code", completed: false}
		],
		add: function (todo) {
			if (!todo.length) {
				return;
			}
			this.todos.push({title: todo, completed: false});
		},
		toggle: function (todo) {
			todo.completed = !todo.completed;
		}
	}
}