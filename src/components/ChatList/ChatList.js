import './ChatList.styles.scss';
import { Link, Outlet } from "react-router-dom";
import InputForm from '../InputForm';
import { selectChats } from '../../store/chat/selectors';
import { shallowEqual, useSelector } from 'react-redux';

export const ChatList = ({ addChat, deleteChat }) => {

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
            <div className="App-header ChatList-header">
                <div>
                    <p>Add Chat</p>
                    {chats.map((chat) => (
                        <div key={chat.id}>
                            <Link to={`/chat/${chat.id}`}>
                                {chat.name}
                            </Link>
                            <span onClick={() => deleteChat(chat.id)} className="Delete-chat">delete</span>
                        </div>
                    ))}
                    <InputForm onAddMessage={handleSubmit} />
                </div>
                <Outlet />
            </div >
        </>
    )
};