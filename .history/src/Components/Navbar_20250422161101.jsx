import React from  'react';
import  './CSS/Navbar.css'
import logo from "../Images/Kavitancha-logo.png";
import { Link } from 'react-router-dom';


const Navbar = () =>{


return (
<div className='Navbar'>


<div className='logo'><img src={logo}></img></div>

<div className='Navbar-heading'>
  <h2>माझं कवितांचं गांव  </h2>
  <h4>जकातवाडी राजधानी सातारा. </h4>
</div>

<div className='Navbar-links'>
<ul>
  <li><a href='' ><span className='Home-a' >Home</span></a></li>
  <li><a href=''>About Us</a></li>
  <li><a href=''>Kavita</a></li>
  <li><a href=''>Gallery</a></li>
  <li><a href=''>Blog</a></li>
  <li><a href=''className='Contact-btn'><p className='cont-p'>Contact Us</p></a></li>

</ul>
</div>


</div>






)


}

export default Navbar;