import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const testavatar = require('../images/2c5.jpg'); // requiring files is required for webpack to process files needed for rendering

export default class ListView extends React.Component {
 // we will need list items visibility to be managed by the filter view

 // onclick function for any list item requires a reciprocal centering response from the map api


  render() {
    return (
      <List>
        <ListItem key={'test'} dense button className={'test'}>
        <Avatar alt="test location img" src={testavatar} />
        <ListItemText primary={'test item 1'} />
        </ListItem>
        <ListItem key={'test1'} dense button className={'test1'}>
        <Avatar alt="test location img" src={testavatar} />
        <ListItemText primary={'test item 2'} />
        </ListItem>
        <ListItem key={'test2'} dense button className={'test2'}>
        <Avatar alt="test location img" src={testavatar} />
        <ListItemText primary={'test item 3'} />
        </ListItem>
      </List>
    )
  }
}