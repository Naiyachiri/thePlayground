import React, { Component } from 'react';


class Springboard extends Component {
  render() {
    return (
      <div className="grid">
         {/* lets make a grid here 4x3 
          note: cell(1-4) refer to number of cells on the grid the div takes up
          to remove all space between divs, set cell margin to 0 and parent vh/vw to 100%
        */}

        <div className='cell cell2'>
          <div className='cell-text cell-text-header'>
            cell 1 & 2
          </div>
          <div className='cell-text cell-text-footer'>
            <span>James Bui</span> 
            <span>757.746.8618</span>
            <span>buijvbio@gmail.com</span>
          </div>
        </div>
        <div className='cell cell1'>cell 3</div>
        <div className='cell cell1'>cell 4</div>
        <div className='cell cell4'>cell 5, 6, 7, 8</div>
        <div className='cell cell1'>cell 9</div>
        <div className='cell cell3'>cell 10, 11, 12</div>
      </div>
    );
  }
}

export default Springboard;
