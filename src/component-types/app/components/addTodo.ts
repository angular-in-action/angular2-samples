import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'AddTodo',
  template: `
    <form (ngSubmit)="onAddTodo.emit(newTodo);">
      <input [(ngModel)]="newTodo"/>
      <button type="submit">Add Todo</button>
    </form>
  `
})
export class AddTodo {
  @Output() onAddTodo = new EventEmitter();
}