import { combineReducers, createStore } from "redux";
import { chatReducer } from "./chat/reducer";
import { profileReducer } from "./profile/reducer";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);