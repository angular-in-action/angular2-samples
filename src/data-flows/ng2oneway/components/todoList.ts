// TodoList (components/todoList.ts)
import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'TodoList',
  template: `
    <ul class="list-group">
      <Todo *ngFor="#todo of todos; #i = index;" [todo]="todo" [index]="i"></Todo>
    </ul>
  `,
  directives: [Todo]
})
export class TodoList {
  @Input() todos;
}