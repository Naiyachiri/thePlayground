import React from "react";
import { Route, Switch} from 'react-router-dom';

import Home from './views/Home.js';
import Stuff from './views/Stuff.js';
import Contact from './views/Contact.js';

const Main = () => (
  <Switch>
    {/* note render is used if you want to pass props, where as component if you are not planning to pass props down */}
    <Route exact path='/' render={(props) => (
    <Home {...props} />)} />
    <Route path='/stuff' render={(props) => (
    <Stuff {...props} />)} />
    <Route path='/contact' render={(props) => (
    <Contact {...props} />)} />
  </Switch>
)

 
export default Main;