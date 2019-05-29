import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item"><NavLink className="nav-link" exact to="/">Dashboard</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
