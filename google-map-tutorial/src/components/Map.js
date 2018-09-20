import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 38.9072, lng: -77.0369}} // set in downtown washington,DC
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div id="map-container" role="application" tabIndex={0} >
        <GoogleMapExample
          containerElement={ <div style={{ height: '80vh', width: '75vw', }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
