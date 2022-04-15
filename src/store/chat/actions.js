export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DELETE_CHAT = "CHAT::DELETE_CHAT";

export const addChat = (newChat) => {
    console.log(newChat);
    console.log({
        type: ADD_CHAT,
        payLoad: newChat
    });

    return {
        type: ADD_CHAT,
        payLoad: newChat
    }
};

export const deleteChat = (idToDelete) => ({
    type: DELETE_CHAT,
    payLoad: idToDelete
});