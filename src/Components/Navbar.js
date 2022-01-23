import React from 'react';
import './Navbar.css';
import Logo from '../images/Logo.png';
function Navbar() {
    
  return (
    <nav class="Nav navbar-fixed-top">
      <img src={Logo} className='I' />
      <ul class="list">
        <li>About Us</li>
        <li>Our Work</li>
        <li>Our Team</li>
        <li>Our Events</li>
      </ul>
      <div>
        <a>
          <button class="btn"><b>Join Us</b></button>
        </a>
        <a>
          <button class="btn"><b>Member Login</b></button>
        </a>
      </div>
    </nav>

  )
};

export default Navbar;

