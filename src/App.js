import React from 'react';
import './App.scss';
import ChatContainer from './ChatContainer'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <ChatContainer data={data}/>
    </div>
  );
}

export default App;
