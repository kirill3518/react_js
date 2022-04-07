// import './App.css';
import Message from './Message';
import { useState, useEffect } from 'react';
import InputForm from './InputForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chat from './Chat';
import { Grid } from '@mui/material';
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home from './Home';
import { ChatList } from './ChatList';

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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">
                Chat
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatList />} >
              <Route path=":id" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}