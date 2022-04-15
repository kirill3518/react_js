import '../App.styles.scss';
import { Link, Outlet } from "react-router-dom";
import InputForm from './InputForm';

export const ChatList = ({ chats, addChat, deleteChat }) => {
    // console.log(`(1) chats = ${chats}`, `; (2) addChat = ${addChat}`, `; (3) deleteChat = ${deleteChat}`);
    console.log(`(1) chats.length = ${chats.length}`);
    console.log(chats);

    const handleSubmit = (newChatName) => {
        console.log(`newChatName=${newChatName}`);
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
        };
        addChat(newChat);
    };

    if (!chats) {
        return (
            <>
                <div className="App-header">
                    Чаты не обнаружены
                </div >
            </>
        )
    } else {
        return (
            <>
                <div className="App-header">
                    {chats.map((chat) => (
                        <div key={chat.id}>
                            <Link to={`/chat/${chat.id}`}>
                                {chat.name}
                            </Link>
                            <span onClick={() => deleteChat(chat.id)}>delete</span>
                        </div>
                    ))}
                </div >
                <div>Add Chat</div>
                <InputForm onAddMessage={handleSubmit} />
                <Outlet />
            </>
        )
    }
};