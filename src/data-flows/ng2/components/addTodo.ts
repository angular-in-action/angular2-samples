import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoService} from '../services/todos';

@Component({
  selector: 'AddTodo',
  template: `
    <form (submit)="addTodo(newTodo)" class="panel panel-default">
      <input class="form-control" [(ngModel)]="newTodo"/>
    </form>
  `,
  providers: [TodoService]
})
export class AddTodo {
  
  constructor (public todoService: TodoService) {}
  
  addTodo (todo) {
    this.todoService.add(todo);
  }
}