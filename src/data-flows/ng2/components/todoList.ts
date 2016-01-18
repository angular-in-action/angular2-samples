import {Component, Input} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from '../services/todos';

@Component({
  selector: 'TodoList',
  template: `
    <ul class="list-group">
      <Todo *ngFor="#todo of todos" [todo]="todo"></Todo>
    </ul>
  `,
  directives: [Todo],
  providers: [TodoService]
})
export class TodoList {
  @Input() todos;
}