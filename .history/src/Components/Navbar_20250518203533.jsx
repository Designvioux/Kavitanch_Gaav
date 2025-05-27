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

      <div className={`Navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kavita" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''}>
              Kavita
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className='Contact-btn' onClick={handleLinkClick}>
              <p className='cont-p'>Contact Us</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
