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
  <li><a href='' ><span className='Home-a'> <Link to="/">Home</Link></span></a></li>
  <li><a href=''><Link to="/about">About Us</Link></a></li>
  <li><a href=''><Link to="/Kavita">Kavita</Link></a></li>
  <li><a href=''><Link to="/Gallery">Blog</Link></a></li>
  <li><a href=''><Link to="/Blog">Blog</Link></a></li>
  <li><a href=''className='Contact-btn'><p className='cont-p'>Contact Us</p></a></li>

</ul>
</div>


</div>






)


}

export default Navbar;