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
            {/* (contact, skills, summary) */}
          </div>
          <div className='cell-text cell-text-footer'>
            <span>James Bui</span> 
            <span>757.746.8618</span>
            <span>buijvbio@gmail.com</span>
          </div>
        </div>
        <a href='https://codepen.io/naiyachiri/full/jarQpa/' rel='noopener noreferrer' id='js-calc-link' data-tool-tip='This is a javascript based calculator that performs the basic four functions in addition to some advanced functions. It uses jQuery, javascript, and bootstrap' target='_blank'>
          <div className='cell cell1' id='js-calculator-cell'>
            <p>JS Calculator</p>
          </div>
        </a>
        <a href='https://codepen.io/naiyachiri/full/bYaPOB/' rel='noopener noreferrer' id='tic-tac-toe-link' data-tool-tip='This is a tic tac toe game implementation using jQuery, javascript, and bootstrap.' target='_blank'>
          <div className='cell cell1' id='tic-tac-toe-cell'>
            <p>Tic Tac Toe Game</p>
          </div>
        </a>
        <div className='cell cell1'>Tic-Tac-Toe</div>
        <div className='cell cell4'>cell 5, 6, 7, 8</div>
        <div className='cell cell1'>cell 9</div>
        <div className='cell cell3'>cell 10, 11, 12</div>
      </div>
    );
  }
}

export default Springboard;
