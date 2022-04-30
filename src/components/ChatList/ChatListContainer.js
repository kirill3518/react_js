import { selectChats } from '../../store/chat/selectors';
import { shallowEqual, useSelector } from 'react-redux';
import { ChatList } from './ChatList';
import { useEffect, useState } from 'react';
import { onValue } from 'firebase/database';
import { chatsRef } from '../../services/firebase';

export const ChatListContainer = ({ addChat, deleteChat }) => {

    const [chats, setChats] = useState([]);
    // const chats = useSelector(selectChats, shallowEqual);

    console.log(chats);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
            // id: `chat${chats.length}`
        };
        addChat(newChat);
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

    return (
        <>
            <ChatList chats={chats} handleSubmit={handleSubmit} deleteChat={deleteChat} />
        </>
    )
};