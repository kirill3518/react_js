import './Chat.styles.scss';
import { useEffect } from 'react';
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
                id: `msg-${messages[id].length}`
            },
            id
        );
    }

    useEffect(() => {
        if (messages[id]?.length > 0) {
            // Ответить роботу только если последний был не робот, чтобы избежать зацикливание
            if (messages[id][messages[id].length - 1].author !== 'Robot') {
                addNewMessage(
                    {
                        author: 'Robot',
                        text: `Привет, ${messages[id][messages[id].length - 1].author}`,
                        id: `msg-${messages[id].length}`
                    },
                    id
                );
            }
        }
    }, [messages, addNewMessage, id]);

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