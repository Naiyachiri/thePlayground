import React from 'react';

import LocationFilterView from '../view/LocationFilterView'
import ListView from '../view/ListView'

export default class SettingsBar extends React.Component {

  render() {


    return(
      <div id="settings-bar"> 
        <LocationFilterView />
        <ListView />
      </div>
    )
  }
}