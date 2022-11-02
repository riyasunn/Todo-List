import { TODO_ACTION_TYPES } from './todo.types';
import { createAction } from '../create-action';



const addItem = (todoList, itemToAdd) => {
    return[...todoList, itemToAdd];

}

export const addItemToList = (todoList, itemToAdd) => {
    const newTodoList = addItem(todoList, itemToAdd);
    return createAction(TODO_ACTION_TYPES.SET_ADD_TODO, newTodoList);

}

export const setIsAddTodoOpen = (boolean) => 
    createAction(TODO_ACTION_TYPES.SET_IS_ADD_TODO_OPEN, boolean);