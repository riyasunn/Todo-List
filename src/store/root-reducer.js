import { combineReducers } from 'redux';
import { todoReducer } from './todo/todo.reducer';
import { menuReducer } from './menu/menu.reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  menu: menuReducer,
  
});