import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoModel} from '../models/todo';
import {TodoService} from '../services/todos';

@Component({
  selector: 'Todo',
  template: `
    <li [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
      (click)="toggle(todo)"
      class="list-group-item">
      {{todo.title}}
    </li>
  `,
  providers: [TodoService]
})
export class Todo {
  @Input() todo: TodoModel;
  
  constructor (public todoService: TodoService) {}
  
  toggle (todo) {
    this.todoService.toggle(todo);
  }
}