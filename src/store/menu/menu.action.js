import {createAction } from '../create-action';
import { MENU_ACTION_TYPES } from './menu.type';

export const setIsMenuOpen = (boolean) => {
    createAction(MENU_ACTION_TYPES.SET_IS_MENU_OPEN, boolean);
};