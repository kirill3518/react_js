import { useState } from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';

export default Chat;

function Chat() {

    const [chatList, setChatList] = useState([{ id: 'id1', name: 'Chat #1' }]);

    // const addChat = (() => {
    //     setChatList((chats) => [...chats, { id: `id${chats.length + 1}`, name: `Chat #${chats.length + 1}` }]);
    // });

    const theme = useTheme();

    return (
        <div className="Chat">
            <ThemeProvider theme={theme}>
                <header className="Chat-header">
                    <List>
                        {chatList.map((item) => (
                            <ListItem key={item.id}>
                                {item.name}
                            </ListItem>
                        ))}
                    </List>
                </header>
            </ThemeProvider>
        </div >
    );

}