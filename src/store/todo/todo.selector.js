import { createSelector } from 'reselect';

const selectTodoReducer = (state) => state.todo;

export const selectTodoList = createSelector(
    [selectTodoReducer],
    (todo) => todo.todoList
);

export const selectIsAddTodoOpen = createSelector(
    [selectTodoReducer],
    (todo) => todo.isAddTodoOpen
);

export const selectIsEditTodoOpen = createSelector(
    [selectTodoReducer],
    (todo) => todo.isEditTodoOpen
);