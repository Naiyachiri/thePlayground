import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const testavatar = require('../images/2c5.jpg'); // requiring files is required for webpack to process files needed for rendering



export default class ListView extends React.Component {
 // we will need list items visibility to be managed by the filter view

ComponentWillMount() {
  this.props.updateMarkers();
}



 // onclick function for any list item requires a reciprocal centering response from the map api
 state = {
   google: this.props.google,
   markerObjects: this.props.markerObjects,
 }

  render() {
    if (this.state.markerObjects.length == 0) {
      this.props.updateMarkers;
    }

    const { markerObjects, google } = this.props;
    return (
      <List>
      { markerObjects.map((marker) => (
        <ListItem
        key={`${marker.marker.name} listItem`}
        onClick={marker.marker.onClick}
        >
          <Avatar alt="test image" src={testavatar} />
          <ListItemText primary={marker.props.name} />
        </ListItem>
      ))}
      </List>
    )
  }
}