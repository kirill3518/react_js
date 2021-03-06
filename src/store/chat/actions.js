export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DELETE_CHAT = "CHAT::DELETE_CHAT";

export const addChat = (newChat) => {
    return {
        type: ADD_CHAT,
        payload: newChat
    }
};

export const deleteChat = (idToDelete) => ({
    type: DELETE_CHAT,
    payload: idToDelete
});