import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        {/* Add in router stuff later */}
      </ul>
      </div>
    );
  }
}

export default Main;
