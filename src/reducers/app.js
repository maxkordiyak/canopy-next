import { SET_MESSAGE } from '../actions/app';

const initialState = {
    message: null,
};

export const app = (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        default:
            return state;
    }
};