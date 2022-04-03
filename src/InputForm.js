import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

export default InputForm;

function InputForm(props) {
    const [myText, setMyText] = useState('');

    const inputRef = useRef(null);

    const handleChange = (event) => {
        setMyText((text) => event.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const sendMessage = () => {
        props.onAddMessage(myText);
        inputRef.current?.focus();
        // setMyText('');
        // inputRef.current?.value = '';
    };

    const theme = useTheme();

    return (
        <div className="InputForm">
            <ThemeProvider theme={theme}>
                <TextField
                    style={{ margin: '20px' }}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                    inputRef={inputRef}
                />
                <Button
                    variant="contained"
                    onClick={sendMessage}
                    style={{
                        margin: "20px",
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main
                    }}
                >
                    Send
                </Button>
            </ThemeProvider>
        </div>
    );
}