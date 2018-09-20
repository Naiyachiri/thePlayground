import React from 'react'

import Input from '@material-ui/core/Input'

// manage filter ui here
export default class LocationFilterView extends React.Component {

  state = {
    query: 'Locations Filter'
  }

  updateQuery = (query) => {
    (this.setState({ query : query }))
    //do something to change marker visibility based on matches
  } 

  render() {
    return (
      <Input 
      value={this.state.query}
      className={'location-filter-input'}
      inputProps={{'aria-label': 'Location Filter'}}
      onChange={(event) => this.updateQuery(event.target.value)}
      />
    )
  }
}