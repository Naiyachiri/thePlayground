import React, { Component } from 'react';

class FilterComponent extends Component {

  render() {
    // set conditionals to determine if it has aria-hidden or not for accessibility
    return(
      <div id="filter-component">
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
      </div>
    )
  };  
};

export default FilterComponent