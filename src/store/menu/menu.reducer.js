import { MENU_ACTION_TYPES } from './menu.type';

const MENU_INITIAL_STATE = {
    isMenuOpen: true,
}

export const menuReducer = (state = MENU_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case MENU_ACTION_TYPES.SET_IS_MENU_OPEN :
            return {
                ...state, 
                isMenuOpen: payload,
            };
        default:
            return state;
    }
};

