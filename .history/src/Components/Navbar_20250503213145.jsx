import React, { useState } from 'react';
import './CSS/Navbar.css';
import logo from "../Images/Kavitancha-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close menu on link click
  };

  return (
    <div className='Navbar'>

    
        <img src={logo} alt="Logo" />
 

      <div className='Navbar-heading'>
        <h2>माझं कवितांचं गांव</h2>
        <h4>जकातवाडी राजधानी सातारा.</h4>
      </div> className

      <div className="hamburger-icon" onClick={toggleHamburger}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`Navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/Kavita" onClick={handleLinkClick}>Kavita</Link></li>
          <li><Link to="/Gallery" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
          <li>
            <Link to="/ContactUs" className='Contact-btn' onClick={handleLinkClick}>
              <p className='cont-p'>Contact Us</p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
