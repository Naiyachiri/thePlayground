import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <img src='http://unsplash.it/50/50' alt='place holder logo'></img>
        <Link to={{ pathname: '/'}}>
          <p className='nav-item'>Home</p>
        </Link>
        <Link to={{ pathname: '/'}}>
          <p className='nav-item'>About</p>
        </Link>
        <Link to={{ pathname: '/'}}>
          <p className='nav-item'>Projects</p>
        </Link>
      </nav>
    );
  }
}

export default Nav;
