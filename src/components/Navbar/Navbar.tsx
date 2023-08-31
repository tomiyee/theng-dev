import React from "react";
import "./Navbar.css";
import Pdf from '../../assets/tommy-heng-resume.pdf';

/**
 * Creates a navbar
 */
const Navbar: React.FC = () => {
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
        <a 
          href={Pdf} 
          target='_blank' 
          rel='noreferrer' 
          className='outline-button'
        >RESUME</a>
      </div>
    </nav>
  );
};

export default Navbar;