import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [
    {
        name: "Chat1",
        id: "chat1"
    }
];

// const initialState = [
//     {
//         name: "Chat1",
//         id: "chat1"
//     },
//     {
//         name: "Chat2",
//         id: "chat2"
//     },
//     {
//         name: "Chat3",
//         id: "chat3"
//     }
// ]

export const chatReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            console.log('case ADD_CHAT');
            console.log(type);
            console.log(payload);
            return [...state, { payload }];
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }
        default:
            return state;
    }
};