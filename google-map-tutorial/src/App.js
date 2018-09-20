import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './components/Map'
import FilterComponent from './components/FilterComponent'

import * as DataFetcherAPI from './data/DataFetcherAPI'

class App extends Component {

  state = {
    center: {lat: 38.9072, lng: -77.0369}, // default center
    zoom: {},
    locations: [],
    originalLocations: [],
    selectedMarkerIndex: -1,
    defaultMapCenter: {lat: 38.9072, lng: -77.0369},
    newCenter: {},
    defaultZoomValue: 14,
    filterResults: [],
    
  }
  
  /// LIFE CYCLE METHODS ///
  componentDidMount() {
    function handleErrors(res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    }

    DataFetcherAPI.getLocationsAll()
    .then((locations => {
      this.setState({
        locations: locations,
        originalLocations: locations
      })
    }));
  }
  
  /// METHODS ///
handleMarkerClick = (event, ll, index) => {
    this.setState({
      selectedMarkerIndex: index,
      center: ll, // selected marker's latlng(ll)
    })
}

handleListItemClick = (event, location, index) => { // composite marker click in order to similate if a marker was clicked but using list items instead
  let newCenter = { lat: 38.9072, lng: -77.0369 } // initialize values incase no ll is given
  if (location !== undefined && location.location !== undefined) { // check if location was passed into the method
    newCenter = {lat: location.location.lat, lng: location.location.lng}// set new center to that list item's location
  }
 this.handleMarkerClick(event, newCenter, index)
}

handleInfoWindowCloseEvent = (event) => {
    //reset state values to default
    this.setState({
      selectedMarkerIndex: -1,
      center: this.defaultMapCenter,
      zoom: this.defaultZoomValue
    })
}

restoreCenter = () => {
  this.setState({
    newCenter: this.state.defaultCenter
  })
}

setNewCenter = () => {
  this.setState
}

updateLocations = (filterResults, query) => {
  if (query) {
    this.setState((state) => ({
      locations: filterResults
    }))
  } else {
    this.setState({ locations: this.state.originalLocations}) // resets locations back to default
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FilterComponent 
          onListItemClick={this.handleListItemClick}
          locationsArray={this.state.locations}
          onKeyPress={this.handleFilterQuery}
         />
        <Map 
        //marker click will be done from inside of another child component
        handleMarkerClick={this.handleMarkerClick} 
        //<CompositeMAPUsingReact onMarkerClick={this.props.onMarkerClick} />
        />
      </div>
    );
  }
}

export default App;
