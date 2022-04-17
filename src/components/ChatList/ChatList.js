import './ChatList.styles.scss';
import { Link, Outlet } from "react-router-dom";
import InputForm from '../InputForm';
import { useTheme, ThemeProvider } from '@mui/material/styles';

export const ChatList = ({ chats, addChat, deleteChat }) => {
    console.log(chats);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
            // id: `chat${chats.length}`
        };
        addChat(newChat);
    };

    const theme = useTheme();

    return (
        <>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </>
    )
};