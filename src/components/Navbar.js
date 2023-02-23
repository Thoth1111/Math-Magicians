import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#f5913e',
  };
  return (
    <>
      <ul className="NavMenu">
        <li>
          <NavLink style={navStyle} to="/">Home |</NavLink>
        </li>
        <li>
          <NavLink style={navStyle} to="/Calculator">Calculator |</NavLink>
        </li>
        <li>
          <NavLink style={navStyle} to="/Quote">Quote |</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
