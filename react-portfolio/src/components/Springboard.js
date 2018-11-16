import React, { Component } from 'react';


class Springboard extends Component {
  render() {
    return (
      <div className="travel-springboard">
      <div className="halfwidth thirdheight" id="top-left-slideshow">
        <img className='image' src={require('../img/tobias-mrzyk-569902-unsplash.jpg')} alt='hiking silouttes'/>
      </div>
      <div className='halfwidth' id='top-right-banner'>
        <h1> Travel Journal with James Bui</h1>
        <h3> Most recent updates:</h3>
        <p><b><em> 11/16/18 Shenandoah Twilight Hike:</em></b></p>
        <p>At $20 per person, we meet at Big Meadows Lodge before beginning our 2 mile hike to see some of the most scenic places along Skyline Drive. It is recommended you wear long pants and closed toed shoes, a jacket and bring along a flashlight.</p>
        <p className='fullwidth'> If you manage to snag a clear night sky you can really see the galaxy. The fresh brisk shenandoah air will revitalize your lungs and refresh your mind.</p>
      </div>
      <div className='fullwidth halfheight' id='middle-wide-gear'>
        <img className='image' src={require('../img/alice-donovan-rouse-199230-unsplash.jpg')} alt='gear packed for the hike'/>
        <div id='middle-wide-banner'>
         Hiking gear: Wind Jacket, Walking shoes, Two cameras, photo book, compass, map, pocket knife, backpack with water.
        </div>
      </div>
      <div className='halfwidth halfheight' id='bottom-left-info'>
        <img className='image' src={require('../img/ian-froome-367862-unsplash.jpg')} alt='wanderlust, never stop traveling'/>
        <div id='bottom-left-banner'>
          <h1>Wanderlust</h1>
          <p className='indent'>Never stop traveling.</p>
        </div>
      </div>
      <div className='halfwidth' id='bottom-right-slideshow'>
        <img className='image' src={require('../img/nathan-dumlao-510443-unsplash.jpg')} alt='two fresh cups of coffee in the morning'/>
        <div class='slide-buttons' id='bottom-right-slideshow-buttons'>
          <div className='button' id='bottom-right-slideshow-b1'></div>
          <div className='button' id='bottom-right-slideshow-b2'></div>
          <div className='button' id='bottom-right-slideshow-b3'></div>
        </div>
      </div>
        {/* photo 3/.5 */}
      </div>
    );
  }
}

export default Springboard;
