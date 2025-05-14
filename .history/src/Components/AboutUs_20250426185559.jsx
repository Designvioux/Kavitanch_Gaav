import React from 'react';
import './CSS/AboutUs.css'
import Book from '../Images/bookCover.png';
import Likit from  '../Images/Likhit.png';
import Book2 from  '../Images/Book2.png';
 
const AboutUs = () =>{




return (

  <div className='AboutUs-Container'>
<div className='Aboutus-HeroSection'>
<h4 className=''>भाषेचा प्रचार</h4>
<img src={Likit} alt="Likit"></img>
<h2>साहित्याच सादरीकरण</h2>
<img src={Book2}></img>

<img src={Book} alt="Books"></img>
<p>संस्कृतीची जोपासना</p>


</div>






  </div>






)



}



export default AboutUs;