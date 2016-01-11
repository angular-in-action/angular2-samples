//our root app component
import {Component} from 'angular2/core';
import {AddTodo, TodoList, Header} from './components';
import {TodoModel} from './models/todo';

@Component({
  selector: 'TodoApp',
  template: `
    <Header></Header>
    <AddTodo (onAddTodo)="addTodo($event)"></AddTodo>
    <TodoList
      [todos]="todos"
      (onToggleTodo)="toggleTodo($event)"></TodoList>
  `,
  directives: [AddTodo, TodoList, Header]
})
export class TodoApp {

  todos:TodoModel[];

  constructor () {
    this.todos = [
      {title: "Read the todo list", completed: true},
      {title: "Look at the code", completed: false}
    ];
  }

  addTodo(todo:String) {
    if (!todo.length) {
      return;
    }
    this.todos.push({title: todo, completed: false});
  }

  toggleTodo(todo) {
    debugger;
    todo.completed = !todo.completed;
  }
}
