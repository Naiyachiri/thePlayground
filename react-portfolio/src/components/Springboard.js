import React, { Component } from 'react';


class Springboard extends Component {
  render() {
    return (
      <section className="grid">
        <div className='cell cell2' id='profile'>
          <div className='cell-text cell-header'>
            <span>James Bui</span>
            <span>757.746.8618</span>
            <span>buijvbio@gmail.com</span>
          </div>
          <div className='cell-body'>
            Hi there! I am a recently graduated front-end web developer looking for new opportunities! I have a nanodegree from
              <a className='inline-link' id='udacity-degree-link' data-tool-tip='Google and AT&T backed coding nanodegree which included over 1200 hours of intensive deadline-based self study. Material covered included HTML5, CSS, ES6 JS, frameworks such as React, Angular, Ember with dedicated projects in React.' href='https://confirm.udacity.com/PVJXEUHH'>
                Udacity
              </a>
            and a certification from
              <a className='inline-link' id='fcc-cert-link' data-tool-tip='12 Front end projects (Simon Says game, calculator, wiki search engine) covering HTML, CSS and over 400 hours of pure javascript algorithms and data structures practice.' href='https://www.freecodecamp.org/naiyachiri/front-end-certification'>
              FreeCodeCamp
            </a>.
          </div>
          <div className='cell-text cell-footer'>
            <a href='https://www.linkedin.com/in/buijames' target='_blank' rel='noopener noreferrer' id='linkedin-link'>
              Linkedin
            </a>
            <a href='https://github.com/Naiyachiri/thePlayground'>
              GitHub
            </a>
            <a href='https://drive.google.com/open?id=14wLbcDQbXjqnTSxmApYWtM0KcckNJQ_g4OXqIe7TJ-0' target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </div>
        </div>
        <a className='project-link' id='js-calc-link' href='https://codepen.io/naiyachiri/full/jarQpa/' rel='noopener noreferrer'  data-tool-tip='This is calculator that performs the basic four functions in addition to some advanced functions. It uses jQuery, javascript, and Bootstrap.' target='_blank'>
          <div className='cell cell1' id='js-calculator-cell'>
            <div className='cell-text cell-header'>JS Calculator</div>
          </div>
        </a>
        <a className='project-link' id='tic-tac-toe-link' href='https://codepen.io/naiyachiri/full/bYaPOB/' rel='noopener noreferrer'  data-tool-tip='This is a tic tac toe game implementation using jQuery, javascript, and Bootstrap.' target='_blank'>
          <div className='cell cell1' id='tic-tac-toe-cell'>
            <div className='cell-text cell-header'>Tic Tac Toe Game</div>
          </div>
        </a>
        <a className='project-link' id='neighborhood-map-link' href='http://naiyachiri.github.io/fend-neighborhood-map' rel='noopener noreferrer'  data-tool-tip='React based google API powered application that tracks coffee shops in the Springfield, VA area. It uses Google and Foursquare to search, and dynamically generate info windows for the user.' target='_blank'>
          <div className='cell cell4' id='neighborhood-map-cell'>
            <div className='cell-text cell-footer'>
        Northern Virginia Coffee Tracker</div>
          </div>
        </a>
        <div className='cell cell1 cell-blog'>
          <div className='cell-text cell-header'>
            <h3>Recent Activity: </h3>
          </div>
          <div className='cell-blog-content'>
          <h4 className='cell-blog-subheading'>2 Dec 2018: </h4>
            <p className='cell-blog-article'>
              Added coding-practice: persistent-bugger
            </p>
            <h4 className='cell-blog-subheading'>1 Dec 2018: </h4>
            <p className='cell-blog-article'>
              Added coding-practice: format-a-string-of-names, square-every-digit
            </p>
            <h4 className='cell-blog-subheading'>30 Nov 2018: </h4>
            <p className='cell-blog-article'>
              Added coding-practice: format-a-string-of-names, square-every-digit
            </p>
            <h4 className='cell-blog-subheading'>30 Nov 2018: </h4>
            <p className='cell-blog-article'>
              Added coding-practice: highest-to-lowest, vowel-count
            </p>
            <h4 className='cell-blog-subheading'>29 Nov 2018: </h4>
            <p className='cell-blog-article'>
              Added coding-practice to personal repository, see new exercises each day!
            </p>
          </div>
        </div>

        <div className='cell cell3'>cell 10, 11, 12</div>
      </section>
    );
  }
}

export default Springboard;
