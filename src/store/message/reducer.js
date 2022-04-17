import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {};

export const messageReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_MESSAGE: {
            return { ...state, ...payload };
        }
        case DELETE_MESSAGE: {
            delete state[payload];
            return state;
        }
        default:
            return state;
    }
};