import React from "react";
import "./Navbar.css";
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
          <div className='navbar-link'>HOME</div>
          <div className='navbar-link'>ABOUT</div>
          <div className='navbar-link'>PORTFOLIO</div>
          <div className='navbar-link'>CONTACT</div>
        </div>
        {/* Resume Button in the top right */}
        <div>
          <OutlineButton>Resume</OutlineButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;