import { TODO_ACTION_TYPES } from "./todo.types";

 const TODO_INITIAL_STATE = {
    todoList: [],
    isAddTodoOpen:false,
    isEditTodoOpen:false,
};

export const todoReducer = (
    state = TODO_INITIAL_STATE,
    action = {},
) => {
    const { type, payload } = action;

    switch (type) {
        case TODO_ACTION_TYPES.SET_TODOList:
            return {...state, todoList: payload};

        case TODO_ACTION_TYPES.SET_IS_ADD_TODO_OPEN:
            return {...state, isAddTodoOpen:payload};
        
        case TODO_ACTION_TYPES.SET_IS_EDIT_TODO_OPEN:
                return {...state, isEditTodoOpen:payload};

        default:
            return state;
    }
};

