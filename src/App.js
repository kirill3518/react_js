// import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Chat } from './Chat';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import { ChatList } from './ChatList';
import { Profile } from './Profile';

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ul>
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
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}