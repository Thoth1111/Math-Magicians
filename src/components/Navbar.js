import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home |</NavLink>
      </li>
      <li>
        <NavLink to="/Calculator">Calculator |</NavLink>
      </li>
      <li>
        <NavLink to="/Quote">Quote |</NavLink>
      </li>
    </ul>
  </>
);

export default Navbar;
