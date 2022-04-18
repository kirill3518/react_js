import './Message.styles.scss';
import { List, ListItem } from '@mui/material';

export default Message;

function Message({ messages }) {

    return (
        <div className="Message">
            <header className="Message-header">
                <List>
                    {messages.map(({ id, text, author }) =>
                        <ListItem key={id}>
                            {author}: {text}
                        </ListItem>
                    )}
                </List>
            </header>
        </div>
    );
}
