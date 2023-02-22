import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home |</Link>
      </li>
      <li>
        <Link to="/">Calculator |</Link>
      </li>
      <li>
        <Link to="/">Quote |</Link>
      </li>
    </ul>
  </>
);

export default Navbar;
