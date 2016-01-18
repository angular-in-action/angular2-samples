//our root app component
import {Component, DoCheck} from 'angular2/core';
import {AddTodo, TodoList, Header} from './components';
import {TodoService} from './services/todos';

@Component({
  selector: 'TodoApp',
  template: `
    <Header></Header>
    <AddTodo></AddTodo>
    <TodoList></TodoList>
  `,
  directives: [AddTodo, TodoList, Header],
  // Add the TodoService so all children components 
  // have access to the same TodoService instance.
  providers: [TodoService]
})
export class TodoApp {}
