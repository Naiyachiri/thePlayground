import React from 'react';

import LocationFilterView from '../view/LocationFilterView'
import ListView from '../view/ListView'

export default class SettingsBar extends React.Component {

  render() {

    return(
      <div id="settings-bar"> 
        <LocationFilterView 
        updateMarkerList = {this.props.updateMarkerList}/>
        <ListView 
        markerObjects ={ this.props.markerObjects }
        google = { this.props.google }
        updateMarkerList = {this.props.updateMarkerList}
        />
      </div>
    )
  }
}