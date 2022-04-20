import { selectChats } from '../../store/chat/selectors';
import { shallowEqual, useSelector } from 'react-redux';
import { ChatList } from './ChatList';

export const ChatListContainer = ({ addChat, deleteChat }) => {

    const chats = useSelector(selectChats, shallowEqual);

    console.log(chats);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
            // id: `chat${chats.length}`
        };
        addChat(newChat);
    };

    return (
        <>
            <ChatList chats={chats} handleSubmit={handleSubmit} deleteChat={deleteChat} />
        </>
    )
};