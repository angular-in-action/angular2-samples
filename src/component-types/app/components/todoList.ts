import {Component, Input} from 'angular2/core';
import {Todo} from './todo';
import {TodoModel} from '../models/todo';

@Component({
  selector: 'TodoList',
  template: `
    <ul>
      <Todo *ngFor="#todo of todos" [todo]="todo"></Todo>
    </ul>
  `,
  directives: [Todo]
})
export class TodoList {
  @Input() todos: TodoModel[];
}