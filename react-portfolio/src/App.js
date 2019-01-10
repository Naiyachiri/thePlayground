import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Springboard from './components/Springboard';
import Nav from './view/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Springboard}/>
        </main>
      </div>
    );
  }
}

export default App;
