import './ChatList.styles.scss';
import { Link, Outlet } from "react-router-dom";
import InputForm from '../InputForm';

export const ChatList = ({ chats, handleSubmit, deleteChat }) => {

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