import React, { Component } from 'react';
import './App.css';

import MapContainer from './hoc/MapContainer'
import SettingsBar from './hoc/SettingsBar'

class App extends Component {

  render() {

    return (
      <div id="main-content">
        <h1 class="main-title"> Mapping begins</h1>
        <SettingsBar />
        <MapContainer />
      </div>
    )
  }
}

export default App;
