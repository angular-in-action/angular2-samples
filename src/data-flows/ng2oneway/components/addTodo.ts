// AddTodo (components/addTodo.ts)
import {Component, Output, EventEmitter} from 'angular2/core';
import {addTodo} from '../store';

@Component({
  selector: 'AddTodo',
  template: `
    <form (submit)="addTodo(newTodo)" class="panel panel-default">
      <input class="form-control" [(ngModel)]="newTodo"/>
    </form>
  `
})
export class AddTodo {
  addTodo;
  constructor () {
    this.addTodo = addTodo;
  }
}