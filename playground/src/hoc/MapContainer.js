import React from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import SettingsBar from '../hoc/SettingsBar'

export class MapContainer extends React.Component {

  state = { 
    selectedPlace: {name: 'test'},
    showingInfoWindow: false,
    activeMarker: {},
    markerObjects: []
  };

  locations = [
    {
      title: 'LM information',
      name: 'Lincoln Memorial',
      position: {lat: 38.8893, lng: -77.0502},
      visible: true
    },
    {
      title: 'WH information',
      name: 'The White House',
      position: {lat: 38.8977, lng: -77.0365},
      visible: true
    },
    {
      title: 'WW2M information',
      name: 'National World War 2 Memorial',
      position: {lat: 38.8894, lng: -77.0405},
      visible: true
    },
    {
      title: 'LOC information',
      name: 'Library of Congress',
      position: {lat: 38.8913, lng: -77.0477},
      visible: true
    },
    {
      title: 'NM information',
      name: 'National Mall',
      position: {lat: 38.8896, lng: -77.0230},
      visible: true
    }
  ]
  
  //handler for when markers are clicked
  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  //method to close info window
  onMapClicked = (props) => {

    if (this.state.showInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // add markers to markerObjects for future reference 
  onMarkerMounted = (marker) => { // every marker generated automatically pushed to our tempMarker list
    this.tempMarkerList.push(marker);    
  }

    tempMarkerList = [] // container for markers

    updateMarkers = () => ( // method to be passed to our listview in order to allow it to call for updated markerlists
      this.setState({markerObjects: this.tempMarkerList})
    )


  render() {
    const { google } = this.props;
          // the googleAPI passes a loaded prop to the container when it finishes loading google's api
    let bounds = new this.props.google.maps.LatLngBounds();
    // create a bound to base the map around given locations and centers based on marker click
    this.locations.map((location) => (bounds.extend(location.position)))

    if (!this.props.loaded) { // by checking if the loaded prop has been passed to the container we can leave a loading message for the user

      return <div>Loading...</div>
    }

    return (
      // map takes certain properties as well as any marker or info window components and properties and uses the GoogleApiWrapper to generate the related components for us
      <div>       
        <div id="map-container">
          <Map 
          google={ google } 
          initialCenter={{
            lat: 38.9072,
            lng: -77.0369
          }}
          zoom={14}
          bounds={bounds}
          >
          {this.locations.map((location) => ( //dynamically iterate through locations to generate markers
            <Marker 
              key = { location.title }
              id = {location.name}
              ref = {this.onMarkerMounted}
              onClick =  {this.onMarkerClick }
              name = { location.name }
              position = { location.position }
              title = { location.title }
              updateMarkers = {this.updateMarkers}
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

        <SettingsBar 
          markerObjects = { this.tempMarkerList } 
          // marker objects needs to be used to link the generated list item with actual map markers, but setting state in the mapContainer component seems to cause react to complain about setState loops
          google = { google }
          updateMarkers = { this.updateMarkers }
        />
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDv0er67dF5-FDItule4mfk8xSbXHoF12Y'
})(MapContainer)