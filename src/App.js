import './App.styles.scss';
import { Chat } from './components/Chat/Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { ChatListContainer } from './components/ChatList/ChatListContainer';
import { Profile } from './components/Profile/Profile';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from './store/chat/actions';
import { selectMessages } from './store/message/selectors';
import { addMessageWithThunk, deleteMessage } from './store/message/actions';
import { Gists } from './components/Gists/Gists';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { PublicRoute } from './components/PublicRoute/PublicRoute';

export default App;

function App() {

  const messages = useSelector(selectMessages, shallowEqual);

  const dispatch = useDispatch();

  const addNewMessage = (newMsg, id) => {
    dispatch(addMessageWithThunk(newMsg, id));
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    dispatch(addMessageWithThunk([], newChat.id));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteMessage(id));
    //// return <Navigate to="/chat" replace />
  };

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  return (
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
          <li>
            <Link to="/gists">
              Gists
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/gists" element={<Gists />} />
          <Route path="/chat" element={<ChatListContainer addChat={addNewChat} deleteChat={removeChat} />}>
            <Route path=":id" element={<Chat messages={messages} addNewMessage={addNewMessage} />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}