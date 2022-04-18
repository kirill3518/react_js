export const ADD_MESSAGES = "CHAT::ADD_MESSAGES";
export const DELETE_MESSAGES = "CHAT::DELETE_MESSAGES";

export const addMessage = (newMessage) => {

    return {
        type: ADD_MESSAGES,
        payload: newMessage
    }
};

export const deleteMessage = (idToDelete) => ({
    type: DELETE_MESSAGES,
    payload: idToDelete
});