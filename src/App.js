// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
// import Message from './Message';
import React, { useState, useEffect } from 'react';


function App(props) {
  // const [myState, setMyState] = useState({ messageList: [{ text: 'Text', author: 'Kirill' }], value: '' });
  const [myState, setMyState] = useState({ messageList: [], value: '' });

  const handleChange = (event) => {
    // Изменить только value
    setMyState((state) => ({ messageList: state.messageList, value: event.target.value }));
  };

  const updateMessageList = () => {
    // Изменить только messageList
    setMyState((state) => ({ messageList: [...state.messageList, { text: state.value, author: 'Kirill' }], value: state.value }));
  };

  useEffect(() => {
    console.log('useEffect');
    if (myState.messageList.length > 0) {
      // Ответить роботу только если последний был не робот, чтобы избежать зацикливание
      if (myState.messageList[myState.messageList.length - 1].author !== 'Robot') {
        setMyState((state) => ({ messageList: [...state.messageList, { text: `Привет, ${state.messageList[state.messageList.length - 1].author}`, author: 'Robot' }], value: state.value }));
      }
    }
  }, [myState.messageList]);


  const result = myState.messageList.map((obj) => {
    return <p>
      {obj.author}: {obj.text}
    </p>;
  });

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button className="App-send-button" onClick={updateMessageList}>Отправить</button>

      {result}
    </div>
  );

}
export default App;
