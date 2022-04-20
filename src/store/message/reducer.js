import { ADD_MESSAGES, DELETE_MESSAGES } from "./actions";

const initialState = {};

export const messageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGES: {
            if (payload.newMessage?.length === 0) {
                return { ...state, [payload.chatId]: [] };
            } else {
                return { ...state, [payload.chatId]: [...state[payload.chatId], payload.newMessage] };
            }
        }
        case DELETE_MESSAGES: {
            delete state[payload];
            return state;
        }
        default:
            return state;
    }
};