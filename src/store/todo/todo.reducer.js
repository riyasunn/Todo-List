import { TODO_ACTION_TYPES } from "./todo.types";

 const TODO_INITIAL_STATE = {
    todoList: [],
};

export const todoReducer = (
    state = TODO_INITIAL_STATE,
    action = {},
) => {
    const { type, payload } = action;

    switch (type) {
        case TODO_ACTION_TYPES.SET_ADD_TODO:
            return {...state, todoList: payload};
        default:
            return state;
    }
};

