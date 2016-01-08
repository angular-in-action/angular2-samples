import {Component, Input} from 'angular2/core';
import {TodoModel} from '../models/todo';

@Component({
  selector: 'AddTodo',
  template: `
    <form (ngSubmit)="onAddTodo(newTodo);">
      <input [(ngModel)]="newTodo"/>
      <button type="submit">Add Todo</button>
    </form>
  `
})
export class AddTodo {
  @Input() todos:TodoModel[];

  onAddTodo(todo: string): void {
    this.todos.push({title: todo, completed: false});
  }
}