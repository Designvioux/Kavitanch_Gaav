import React from 'react';
import './CSS/AboutUs.css'
import Book from '../Images/bookCover.png';
import Likit from  '../Images/Likhit.png';
import Book2 from  '../Images/Book2.png';
 
const AboutUs = () =>{




return (

  <div className='AboutUs-Container'>
<div className='Aboutus-HeroSection'>
<h4 className='bhasha'>भाषेचा प्रचार</h4>
<img src={Likit} alt="Likit" className='Likhit-img'></img>
<h2 className='sahitya'>साहित्याच सादरीकरण</h2>
<img src={Book2} alt='page-book' className='book-pages'></img>

<img src={Book} alt="Books"></img>
<p>संस्कृतीची जोपासना</p>


</div>






  </div>






)



}



export default AboutUs;