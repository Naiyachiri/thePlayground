import React, { Component } from 'react';
import './App.css';

import MapContainer from './hoc/MapContainer'


class App extends Component {
 // create a prop which passes locations from mapContainer to settings bar's list
  render() {

    return (
      <div id="main-content">
        <h1 class="main-title"> Mapping begins</h1>
        <MapContainer />
      </div>
    )
  }
}

export default App;
