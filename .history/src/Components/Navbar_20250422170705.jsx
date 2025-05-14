import React from 'react';
import './CSS/Navbar.css';
import logo from "../Images/Kavitancha-logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'><img src={logo} alt="logo" /></div>

      <div className='Navbar-heading'>
        <h2>माझं कवितांचं गांव</h2>
        <h4>जकातवाडी राजधानी सातारा.</h4>
      </div>

      <div className='Navbar-links'>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kavita"
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              Kavita
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "nav-link contact-btn active-link" : "nav-link contact-btn"}
            >
              <p className='cont-p'>Contact Us</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
