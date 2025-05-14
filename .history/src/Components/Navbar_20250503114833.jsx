import React, { useState } from 'react';
import './CSS/Navbar.css';
import logo from "../Images/Kavitancha-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Navbar'>

      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>

      <div className='Navbar-heading'>
        <h2>माझं कवितांचं गांव</h2>
        <h4>जकातवाडी राजधानी सातारा.</h4>
      </div>

      <div className="hamburger-icon" onClick={toggleHamburger}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`Navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Kavita">Kavita</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/ContactUs"><p className='cont-p'>Contact Us</p></Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
