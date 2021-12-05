import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { OutlineButton } from '../OutlineButton';

/**
 * Creates a navbar
 */
const Navbar = props => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        {/* The Navbar Links */}
        <div className='navbar-links'>
          <a href='#banner'><div className='navbar-link'>HOME</div></a>
          <a href='#about'><div className='navbar-link'>ABOUT</div></a>
          <a href='#experience'><div className='navbar-link'>EXPERIENCE</div></a> 
          <a href='#projects'><div className='navbar-link'>PORTFOLIO</div></a> 
        </div>
        {/* Resume Button in the top right */}
        <div>
          {/* <OutlineButton>RESUME</OutlineButton> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;