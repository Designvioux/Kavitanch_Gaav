import React from  'react';
import './CSS/HeroSection.css';
import Book from '../';
import Likit from  '../Images/Likhit.png';
import Book2 from  '../Images/Book2.png';

const HeroSection = () =>{

  return (
   


<div className='Aboutus-HeroSection'>
<h4 className='bhasha'>भाषेचा प्रचार</h4>
<img src={Likit} alt="Likit" className='Likhit-img'></img>

<div className='middle-cont'>
<h2 className='sahitya'>साहित्याच सादरीकरण  </h2>

<img src={Book2} alt='page-book' className='book-pages'></img>

</div>

<img src={Book} alt="Books" className='Books-bunch'></img>
<p className='sanskruti'>संस्कृतीची जोपासना</p>


</div>
  )


}

export default HeroSection;