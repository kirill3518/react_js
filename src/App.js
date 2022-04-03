// import './App.css';
import Message from './Message';
import { useState, useEffect } from 'react';
import InputForm from './InputForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chat from './Chat';
import { Grid } from '@mui/material';

export default App;

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

function App(props) {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (message) => {
    setMessageList((messages) => [...messages, { id: messages.length, text: message, author: 'Kirill' }]);
  };

  useEffect(() => {
    console.log('useEffect');
    if (messageList.length > 0) {
      // Ответить роботу только если последний был не робот, чтобы избежать зацикливание
      if (messageList[messageList.length - 1].author !== 'Robot') {
        setMessageList((messages) => [...messages, { id: messages.length, text: `Привет, ${messages[messages.length - 1].author}`, author: 'Robot' }]);
      }
    }
  }, [messageList]);

  const result = messageList.map((obj) => {
    return <p key={obj.id}>
      {obj.author}: {obj.text}
    </p>;
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <InputForm onAddMessage={addMessage} />
        <Grid container spacing={2}>
          <Grid item md={2}>
            <nav aria-label="main mailbox folders">
              <Chat />
            </nav>
          </Grid>
          <Grid item md={10}>
            <nav aria-label="secondary mailbox folders">

              {/* если в props передавать массив с обьектами то map не работает */}
              {/* < Message messages={messageList} /> */}

              {/* поэтому в props передается массив строк */}
              < Message messages={result} />
            </nav>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}