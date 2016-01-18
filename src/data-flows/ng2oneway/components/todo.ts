// Todo (components/todo.ts)
import {Component, Input} from 'angular2/core';
import {toggleTodo} from '../store';

@Component({
  selector: 'Todo',
  template: `
    <li [ngClass]="{completed: todo.completed}"
      (click)="toggleTodo(index)"
      class="list-group-item">
      {{todo.title}}
    </li>
  `
})
export class Todo {
  @Input() todo;
  @Input() index;
  
  // Pass through to the TodoStore
  toggleTodo = toggleTodo;
}