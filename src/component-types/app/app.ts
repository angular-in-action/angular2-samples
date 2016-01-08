//our root app component
import {Component} from 'angular2/core';
import {AddTodo, TodoList, Header} from './components';
import {TodoModel} from './models/todo';

@Component({
  selector: 'TodoApp',
  template: `
    <Header></Header>
    <AddTodo [todos]="todos"></AddTodo>
    <TodoList [todos]="todos"></TodoList>
  `,
  directives: [AddTodo, TodoList, Header]
})
export class TodoApp {

  public todos:TodoModel[];

  constructor () {
    this.todos = [
      {title: "Read the todo list", completed: true},
      {title: "Look at the code", completed: false}
    ];
  }
}
