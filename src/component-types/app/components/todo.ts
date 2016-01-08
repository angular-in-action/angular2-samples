import {Component, Input} from 'angular2/core';
import {TodoModel} from '../models/todo';

@Component({
  selector: 'Todo',
  template: `
    <li [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
      (click)="toggleTodo()">
      {{todo.title}}
    </li>
  `
})
export class Todo {
  @Input() todo:TodoModel;

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }
}