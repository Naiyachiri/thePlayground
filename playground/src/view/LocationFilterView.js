import React from 'react'

import Input from '@material-ui/core/Input'

// manage filter ui here
export default class LocationFilterView extends React.Component {

  render() {
    return (
      <Input 
      value="Locations Filter"
      className={'location-filter-input'}
      inputProps={{'aria-label': 'Location Filter'}}
      />
    )
  }
}