import React from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import MarkerList from '../components/MarkerList'

const locations = [
  {
    title: 'LM information',
    name: 'Lincoln Memorial',
    position: {lat: 38.8893, lng: -77.0502}
  },
  {
    title: 'WH information',
    name: 'The White House',
    position: {lat: 38.8977, lng: -77.0365}
  },
  {
    title: 'WW2M information',
    name: 'National World War 2 Memorial',
    position: {lat: 38.8894, lng: -77.0405}
  },
  {
    title: 'LOC information',
    name: 'Library of Congress',
    position: {lat: 38.8913, lng: -77.0477}
  },
  {
    title: 'NM information',
    name: 'National Mall',
    position: {lat: 38.8896, lng: -77.0230}
  }
]

export class MapContainer extends React.Component {
  state = { 
    selectedPlace: {name: 'test'},
    locations: [], // an array of location objects which contain necessary information for LocationFilter to use
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { google } = this.props;
          // the googleAPI passes a loaded prop to the container when it finishes loading google's api
    if (!this.props.loaded) { // by checking if the loaded prop has been passed to the container we can leave a loading message for the user

      return <div>Loading...</div>
    }

    return (
      // map takes certain properties as well as any marker or info window components and properties and uses the GoogleApiWrapper to generate the related components for us
      <div id="map-container">
      <Map 
      google={ google } 
      initialCenter={{
        lat: 38.9072,
        lng: -77.0369
      }}
      zoom={14}
      >
      {locations.map((location) => ( //dynamically iterate through locations to generate markers
        <Marker 
          onClick =  {this.onMarkerClick }
          name = { location.name }
          position = { location.position }
          title = { location.title }
        />
      ))}

      <InfoWindow 
        marker = { this.state.activeMarker }
        visible = { this.state.showingInfoWindow} >
          <div>
            <h2> {this.state.selectedPlace.name} </h2>
          </div>
      </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDv0er67dF5-FDItule4mfk8xSbXHoF12Y'
})(MapContainer)