import './App.styles.scss';
import React, { useState } from 'react';
// import { createTheme } from '@mui/material/styles';
import { Chat } from './components/Chat/Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { ChatList } from './components/ChatList';
import { Profile } from './components/Profile/Profile';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { store } from './store';
import { selectChats } from './store/chat/selectors';
import { addChat, deleteChat } from './store/chat/actions';
import { ThemeContext } from '../src/utils/ThemeContext';

export default App;

// const initialChats = [
//   {
//     name: "Chat1",
//     id: "chat1"
//   },
//   {
//     name: "Chat2",
//     id: "chat2"
//   },
//   {
//     name: "Chat3",
//     id: "chat3"
//   }
// ];

// const initMessages = initialChats.reduce((acc, chat) => {
//   acc[chat.id] = [];
//   return acc;
// }, {});

const initMessages = {};

function App() {
  // console.log(initMessages);
  const [theme, setTheme] = useState("dark");

  const chats = useSelector(selectChats, shallowEqual);
  // const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(initMessages);
  console.log(messages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const addMessage = (newMsg, id) => {
    console.log(messages);
    console.log(newMsg);
    console.log(id);
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addNewChat = (newChat) => {
    console.log('newChat=');
    console.log(newChat);
    dispatch(addChat(newChat));
    console.log({ [newChat.id]: [] });
    setMessages((prevMessages) => {
      console.log(prevMessages);
      return { ...prevMessages, [newChat.id]: [] };
    });
    console.log('messages=');
    console.log(messages);
  };

  const removeChat = (id) => {
    console.log('id=');
    console.log(id);
    dispatch(deleteChat(id));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      // delete newMessages(id);
      delete newMessages[id];

      return newMessages;
    });
  };

  // <Provider store={store}>
  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      < div className="App" >
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <ul className='App-ul'>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/chat">
                Chat
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<ChatList chats={chats} addChat={addNewChat} deleteChat={removeChat} />}>
              <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
            </Route>
            <Route path="*" element={<h4>404</h4>} />
          </Routes>
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </div >
    </ThemeContext.Provider>
  );
}