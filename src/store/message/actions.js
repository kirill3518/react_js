export const ADD_MESSAGE = "CHAT::ADD_MESSAGE";
export const DELETE_MESSAGE = "CHAT::DELETE_MESSAGE";

export const addMessage = (newMessage) => {

    return {
        type: ADD_MESSAGE,
        payload: newMessage
    }
};

export const deleteMessage = (idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: idToDelete
});