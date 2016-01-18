// TodoApp (app.ts)
import {Component} from 'angular2/core';
import {AddTodo, TodoList, Header} from './components';
import {TodoStore} from './store';

@Component({
  selector: 'TodoApp2',
  template: `
    <Header></Header>
    <AddTodo></AddTodo>
    <TodoList [todos]="todos"></TodoList>
  `,
  directives: [AddTodo, TodoList, Header]
})
export class TodoApp {
  store = TodoStore;
  todos = this.store.getState();
  
  constructor () {
    this.store.subscribe(() => {
      this.todos = this.store.getState();
    })
  }
}
