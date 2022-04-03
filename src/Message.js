// import './Message.css';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { List } from '@mui/material';

export default Message;

function Message(props) {

    const theme = useTheme();

    return (
        <div className="Message">
            <ThemeProvider theme={theme}>
                <header className="Message-header">
                    <List>
                        {/* если в props передавать массив с обьектами то map не работает */}
                        {/* {messageList.map((item) => (
                            <ListItem key={item.id}>
                                {item.name}
                            </ListItem>
                        ))} */}

                        {/* поэтому в props передается массив строк */}
                        {props.messages}
                    </List>
                </header>
            </ThemeProvider>
        </div>
    );
}