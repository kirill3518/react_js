import { ADD_MESSAGES, DELETE_MESSAGES } from "./actions";

const initialState = {};

export const messageReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_MESSAGES: {
            return { ...state, ...payload };
        }
        case DELETE_MESSAGES: {
            delete state[payload];
            return state;
        }
        default:
            return state;
    }
};