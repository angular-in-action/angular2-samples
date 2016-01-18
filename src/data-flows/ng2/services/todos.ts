import {Injectable} from 'angular2/core';
import {TodoModel} from '../models/todo';

@Injectable()
export class TodoService {
	todos: TodoModel[];
	constructor () {
		this.todos = [
			{title: "Read the todo list", completed: true},
			{title: "Look at the code", completed: false}
		]; 
	}
	
	add (todo: String): void {
		if (!todo.length) {
			return;
		}
		this.todos.push({title: todo, completed: false});
	}
	
	toggle (todo: TodoModel): void {
		todo.completed = !todo.completed;
	}
}