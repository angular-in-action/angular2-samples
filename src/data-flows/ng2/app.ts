//our root app component
import {Component, DoCheck} from 'angular2/core';
import {AddTodo, TodoList, Header} from './components';
import {TodoService} from './services/todos';

@Component({
  selector: 'TodoApp',
  template: `
    <Header></Header>
    <AddTodo></AddTodo>
    <TodoList [todos]="todoService.todos"></TodoList>
  `,
  directives: [AddTodo, TodoList, Header],
  providers: [TodoService]
})
export class TodoApp {
  constructor (public todoService: TodoService) {}
}
