// generates a list of markers to be rendered by the Map component
// takes an array through the prop 'locations'
import React, { Component } from 'react'

import { Marker } from 'google-maps-react';

export default class MarkerList extends React.Component {

  render() {
    const { locationList } = this.props;
    let markers = ""
    return (
      <div>
      {locationList.map((location) => {
        <Marker 
        
        />
      })}
      </div>
    )
  }
}