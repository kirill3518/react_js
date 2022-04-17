import './App.styles.scss';
import React, { useState } from 'react';
import { Chat } from './components/Chat/Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { ChatList } from './components/ChatList/ChatList';
import { Profile } from './components/Profile/Profile';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { selectChats } from './store/chat/selectors';
import { addChat, deleteChat } from './store/chat/actions';
import { ThemeContext } from '../src/utils/ThemeContext';
import { selectMessages } from './store/message/selectors';
import { addMessage, deleteMessage } from './store/message/actions';

export default App;

function App() {

  const [theme, setTheme] = useState("dark");

  const chats = useSelector(selectChats, shallowEqual);
  const messages = useSelector(selectMessages, shallowEqual);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const addNewMessage = (newMsg, id) => {
    dispatch(addMessage({ [id]: [...messages[id], newMsg] }));
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    dispatch(addMessage({ [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteMessage(id));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      < div className="App" >
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
              <Route path=":id" element={<Chat messages={messages} addNewMessage={addNewMessage} />} />
            </Route>
            <Route path="*" element={<h4>404</h4>} />
          </Routes>
        </BrowserRouter>
      </div >
    </ThemeContext.Provider>
  );
}