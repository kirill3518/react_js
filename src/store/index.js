import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { chatReducer } from "./chat/reducer";
import { messageReducer } from "./message/reducer";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatReducer,
        messages: messageReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);