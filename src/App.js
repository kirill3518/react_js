import './App.styles.scss';
import { Chat } from './components/Chat/Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { ChatList } from './components/ChatList/ChatList';
import { Profile } from './components/Profile/Profile';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from './store/chat/actions';
import { selectMessages } from './store/message/selectors';
import { addMessage, deleteMessage } from './store/message/actions';

export default App;

function App() {

  const messages = useSelector(selectMessages, shallowEqual);

  const dispatch = useDispatch();

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
    // return <Navigate to="/chat" replace />
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
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatList addChat={addNewChat} deleteChat={removeChat} />}>
            <Route path=":id" element={<Chat messages={messages} addNewMessage={addNewMessage} />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}