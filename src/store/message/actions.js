export const ADD_MESSAGES = "CHAT::ADD_MESSAGES";
export const DELETE_MESSAGES = "CHAT::DELETE_MESSAGES";

export const addMessage = (newMessage, chatId) => {

    return {
        type: ADD_MESSAGES,
        payload: { newMessage, chatId }
    }
};

export const deleteMessage = (idToDelete) => ({
    type: DELETE_MESSAGES,
    payload: idToDelete
});

export const addMessageWithThunk = (message, id) => (dispatch) => {
    dispatch(addMessage(message, id));
    if (message.author !== undefined) {
        if (message.author !== 'Robot') {
            setTimeout(() => dispatch(addMessage(
                {
                    author: 'Robot',
                    text: `Привет, ${message.author}`,
                    id: `msg-${Date.now()}`
                },
                id)), 2000);
        }
    }
}