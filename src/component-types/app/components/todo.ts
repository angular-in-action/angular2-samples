import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoModel} from '../models/todo';

@Component({
  selector: 'Todo',
  template: `
    <li [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
      (click)="onToggle.emit(todo)">
      {{todo.title}}
    </li>
  `
})
export class Todo {
  @Input() todo: TodoModel;
  @Output() onToggle = new EventEmitter();
}