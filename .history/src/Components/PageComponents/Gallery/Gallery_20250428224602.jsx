import React from 'react';

import './CSS/Gallery.css';
import img1 from "../Images/Gallery/Gallery1.png";
import img2 from "../Images/Gallery/Gallery2.png"; 
import img3 from "../Images/Gallery/Gallery3.png";
import img4 from "../Images/Gallery/Gallery4.png";
import img5 from "../Images/Gallery/Gallery5.png";
import img6 from "../Images/Gallery/Gallery6.png";
import img7 from "../Images/Gallery/Gallery7.png";
import img07 from "../Images/Gallery/Gallery07.png";
import img8 from "../Images/Gallery/Gallery8.png";
import img9 from "../Images/Gallery/Gallery9.png";
import img10 from "../Images/Gallery/Gallery10.png";
import img11 from "../Images/Gallery/Gallery11.png";
import img12 from "../Images/Gallery/Gallery12.png";
import img13 from "../Images/Gallery/Gallery13.png";
import img14 from "../Images/Gallery/Gallery14.png";
import img15 from "../Images/Gallery/Gallery15.png";

const Gallery = () => {
  return (
    <div className="gallery-container">



<div className="gallery-image-container">

      <div className="image-cont1">
   
        <img className='img1' src={img1} alt="Gallery1" />
        <div className="right-img-cont">
          <img className='img2' src={img2} alt="gallery2"/>
          <img className='img3' src={img3} alt="gallery3"/>
          <img className='img4' src={img4} alt="gallery4"/>
        </div>
      </div>

      <div className="image-cont2">
      <img className='img11' src={img5} alt="Gallery5" />
        <div className="right-img-cont">
          <img className='img22' src={img6} alt="gallery6"/>
          <img className='img33' src={img07} alt="gallery07"/>
          {/* <div className="right-bottom-img"> */}
          <img className='img44' src={img7} alt="gallery7"/>
          {/* </div> */}
        </div>
       
      </div>

      <div className="image-cont3">
      <img className='img111' src={img8} alt="Gallery8" />
        <div className="right-img-cont">
          <img className='img222' src={img9} alt="gallery9"/>
          <img className='img333' src={img10} alt="gallery10"/>
          {/* <div className="right-bottom-img"> */}
          <img className='img444' src={img11} alt="gallery11"/>
          {/* </div> */}
        </div>
       
      </div>

      
      <div className="image-cont4">
      <img className='img1111' src={img12} alt="Gallery12" />
        <div className="right-img-cont">
          <img className='img2222' src={img13} alt="gallery13"/>
          <img className='img3333' src={img14} alt="gallery14"/>
          {/* <div className="right-bottom-img"> */}
          <img className='img4444' src={img15} alt="gallery15"/>
          {/* </div> */}
        </div>
       
      </div>
</div>
      </div>
     
  );
};

export default Gallery;
