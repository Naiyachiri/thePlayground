import React, { Component } from 'react';
import PropTypes from 'prop-types'


class FilterComponent extends Component {
  static propTypes = {
    locations: PropTypes.array.isRequired, // require the library of books to be passed
  }
  render() {
    // set conditionals to determine if it has aria-hidden or not for accessibility
    const { locationsArray, onListItemClick } = this.props;
    return(
      <div id="filter-component">
      {locationsArray.map((location) => (
        <button className="venue-container" id={location.id} onClick={onListItemClick}>
          <h3 className="venue-name">{location.name}</h3>
          <p className="venue-distance">Distance: {location.location.distance/1000} km</p>
          <p className="venue-address">{location.location.formattedAddress.join(", ")}</p>
          <hr></hr>
        </button>
    ))}
      </div>
    )
  };  
};

export default FilterComponent