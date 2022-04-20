import '../App.styles.scss';
import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default InputForm;

function InputForm({ onAddMessage }) {
    const [myText, setMyText] = useState('');

    const inputRef = useRef(null);

    const handleChange = (event) => {
        setMyText((text) => event.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const sendMessage = () => {
        onAddMessage(myText);
        inputRef.current?.focus();
        setMyText('');
    };

    return (
        <div className="InputForm">
            <TextField
                style={{ margin: '20px' }}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={myText}
                onChange={handleChange}
                inputRef={inputRef}
            />
            <Button
                variant="contained"
                onClick={sendMessage}
                style={{
                    margin: "20px"
                }}
            >
                Send
            </Button>
        </div>
    );
}