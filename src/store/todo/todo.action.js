import { TODO_ACTION_TYPES } from './todo.types';
import { createAction } from '../create-action';



const addItem = (todoList, itemToAdd) => {
    return[...todoList, itemToAdd];

};

export const addItemToList = (todoList, itemToAdd) => {
    const newTodoList = addItem(todoList, itemToAdd);
    return createAction(TODO_ACTION_TYPES.SET_TODOList, newTodoList);

};

const editItem = (todoList, itemToEdit) => {
       return todoList.map(
        (todoItem) => 
            todoItem.id === itemToEdit.id ? 
            {...todoItem, title: itemToEdit.title, description: itemToEdit.description} :
            todoItem
            );
       
};


export const editTodoList = (todolist, itemToEdit) => {
    const newTodoList = editItem(todolist, itemToEdit);
    return createAction(TODO_ACTION_TYPES.SET_TODOList, newTodoList);
};



const delItem = (todoList, itemToDel) => {
    return (todoList.filter((todoList) => todoList.id !== itemToDel.id));

}; 

export const delItemToList = (todoList, itemToDel) => {
    const newTodoList = delItem(todoList, itemToDel);
    return createAction(TODO_ACTION_TYPES.SET_TODOList, newTodoList);
};




export const setIsAddTodoOpen = (boolean) => 
    createAction(TODO_ACTION_TYPES.SET_IS_ADD_TODO_OPEN, boolean);

export const setIsEditTodoOpen = (boolean) => 
    createAction(TODO_ACTION_TYPES.SET_IS_EDIT_TODO_OPEN, boolean);





