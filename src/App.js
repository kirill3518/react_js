import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Chat } from './components/Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { ChatList } from './components/ChatList';
import { Profile } from './components/Profile/Profile';
import { Provider } from 'react-redux';
import { store } from './store';

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
  return (
    <Provider store={store}>
      < div className="App" >
        <ThemeProvider theme={theme}>
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
              <Route path="/chat" element={<ChatList />}>
                <Route path=":id" element={<Chat />} />
              </Route>
              <Route path="*" element={<h4>404</h4>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div >
    </Provider>
  );
}