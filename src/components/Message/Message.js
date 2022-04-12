import './Message.styles.scss';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';

export default Message;

function Message({ messages }) {

    const theme = useTheme();

    return (
        <div className="Message">
            <ThemeProvider theme={theme}>
                <header className="Message-header">
                    <List>
                        {messages.map(({ id, text, author }) =>
                            <ListItem key={id}>
                                {author}: {text}
                            </ListItem>
                        )}
                    </List>
                </header>
            </ThemeProvider>
        </div>
    );
}
