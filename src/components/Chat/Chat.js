import { useEffect } from 'react';
// import { useTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, useParams } from 'react-router-dom';
import Message from '../Message/Message';
import InputForm from '../InputForm';

// const initMessages = {
//     chat1: [],
//     chat2: [],
//     chat3: []
// };

export const Chat = ({ messages, addMessage }) => {
    // export const Chat = () => {
    const { id } = useParams();
    console.log(`id=${id}`);

    // const [messages, setMessages] = useState(initMessages);

    // const addMessage = (message) => {
    //     setMessages({ ...messages, [id]: [...messages[id], { text: message, author: 'Kirill', id: messages[id].length }] });
    // };

    const sendMessage = (text) => {
        addMessage(
            {
                author: 'Kirill',
                text,
                id: `msg-${messages[id].length}`
            }
        );
    }

    useEffect(() => {
        if (messages[id]?.length > 0) {
            // Ответить роботу только если последний был не робот, чтобы избежать зацикливание
            if (messages[id][messages[id].length - 1].author !== 'Robot') {
                // setMessages({ ...messages, [id]: [...messages[id], { text: `Привет, ${messages[id][messages[id].length - 1].author}`, author: 'Robot', id: messages[id].length }] });
                addMessage(
                    {
                        author: 'Robot',
                        text: `Привет, ${messages[id][messages[id].length - 1].author}`,
                        id: `msg-${messages[id].length}`
                    },
                    id
                );
            }
        }
    }, [messages, addMessage, id]);

    // const theme = useTheme();

    if (!messages[id]) {
        return <Navigate to="/chat" replace />
    }

    return (
        <div className="Chat">
            {/* <ThemeProvider theme={theme}> */}
            <header>
                <div>
                    <Message messages={messages[id]} />
                    <InputForm onAddMessage={sendMessage} />
                </div>
            </header>
            {/* </ThemeProvider> */}
        </div >
    );
}