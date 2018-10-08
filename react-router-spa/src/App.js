import React from 'react';
import sunny from './sunny.svg';
import './App.css';

import Main from './Main.js';
import Header from './views/Header.js';

// app to be rendered by <__Router>

const App = () => (
  <div>
    <div className='App-header'>
      <img src={sunny} className='App-logo' alt='rotating sun'/>
    </div>
    <Header />
    <Main />
  </div>
)

export default App;
