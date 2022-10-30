import { TODO_ACTION_TYPES } from './todo.types';
import { createAction } from '../create-action';



const addItem = (todoList, itemToAdd) => {
    return[...todoList, itemToAdd];

}

export const addItemToList = (todoList, itemToAdd) => {
    const newTodoList = addItem(todoList, itemToAdd);
    return createAction(TODO_ACTION_TYPES.SET_TODOLIST, newTodoList);

}

    