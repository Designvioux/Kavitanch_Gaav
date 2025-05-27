import React, { useState } from 'react';
import './CSS/Navbar.css';
import logo from "../Images/Kavitancha-logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" className='logo-jakatwadi' />

      <div className='Navbar-heading'>
        <h2>माझं कवितांचं गांव</h2>
        <h4>जकातवाडी राजधानी सातारा.</h4>
      </div>

      <div className="hamburger-icon" onClick={toggleHamburger}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

     
    </div>
  );
};

export default Navbar;
