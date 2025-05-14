import React, { useState } from 'react';
import './CSS/Navbar.css';
import logo from "../Images/Kavitancha-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to track active link
  const [activeLink, setActiveLink] = useState('');

  // Function to handle the active class
  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
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

      <div className='Navbar-links'>
        <ul>
          <li>
            <Link 
              to="/" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleActiveLink('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleActiveLink('about')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/Kavita" 
              className={activeLink === 'kavita' ? 'active' : ''}
              onClick={() => handleActiveLink('kavita')}
            >
              Kavita
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={activeLink === 'gallery' ? 'active' : ''}
              onClick={() => handleActiveLink('gallery')}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/Blog" 
              className={activeLink === 'blog' ? 'active' : ''}
              onClick={() => handleActiveLink('blog')}
            >
              Blog
            </Link>
          </li>
          <li className='Contact-btn'>
            <Link 
              to="/contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleActiveLink('contact')}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
