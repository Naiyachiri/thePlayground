import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><Link to={{ pathname: '/'}}>Home</Link></li>
            <li><Link to={{ pathname: '/stuff'}}>Stuff</Link></li>
            <li><Link to={{ pathname: '/contact'}}>Contact</Link></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}

export default Header