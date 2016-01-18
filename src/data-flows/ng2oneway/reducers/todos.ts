import {TodoModel} from '../models/todo';

const initialState = [
  {title: "Read the todo list", completed: true},
  {title: "Look at the code", completed: false}
];

export function todos (state: TodoModel[] = initialState, action) {
	// Redux reducers typically use a switch statement 
	// to determine how to handle a given action
	switch (action.type) {
		case 'ADD_TODO':
      return [
        ...state,
        {
          title: action.title,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      let todo = state[action.index];
      let toggledTodo = Object.assign({}, todo, {
          completed: !todo.completed
        }); 
      return [
        ...state.slice(0, action.index),
        toggledTodo,
        ...state.slice(action.index + 1)
      ]	
		default:
			return state;
	}
}