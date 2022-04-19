import './Chat.styles.scss';
import { Navigate, useParams } from 'react-router-dom';
import Message from '../Message/Message';
import InputForm from '../InputForm';

export const Chat = ({ messages, addNewMessage }) => {
    console.log(messages);
    const { id } = useParams();
    console.log(`id=${id}`);

    const sendMessage = (text) => {
        addNewMessage(
            {
                author: 'Kirill',
                text,
                id: `msg-${Date.now()}`
                // id: `msg-${messages[id].length}`
            },
            id
        );
    }

    if (!messages[id]) {
        return <Navigate to="/chat" replace />
    }

    return (
        <div className="Chat">
            <header>
                <div className='Chat-messages'>
                    <p>Add Message</p>
                    <Message messages={messages[id]} />
                    <InputForm onAddMessage={sendMessage} />
                </div>
            </header>
        </div >
    );
}