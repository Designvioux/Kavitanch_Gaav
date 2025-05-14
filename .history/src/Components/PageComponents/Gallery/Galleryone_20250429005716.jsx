import React from "react";
import "./CSS/Galleryone.css";

import img17 from "../Images/Gallery/Galleryone17.png";
import img18 from "../Images/Gallery/Galleryone18.png";
import img19 from "../Images/Gallery/Galleryone19.png";
import img20 from "../Images/Gallery/Galleryone20.png";
import img21 from "../Images/Gallery/Galleryon21.png";
import img22 from "../Images/Gallery/Galleryone22.png";
import img23 from "../Images/Gallery/Galleryone23.png";
import img24 from "../Images/Gallery/Galleryone24.png";

const Galleryone = () => {
  return (
 
    <div className="gallery-container">
      {/* <h1 className="gallery-title1">संमेलन छायाचित्रे</h1>
      <p className="gallery-subtitle1">
      "शब्दांच्या सुरांनी सजलेली कविसंमेलनाची गॅलरी!"
      </p> */}
      <div className="gallery-image-container">
      <div className="image-cont1">

        <div className="left-cont-img">
       <div className="img-cont1">
       <img className='img241' src={img17} alt="galleryone17"/>
          <img className='img242' src={img18} alt="galleryone18"/>
          <img className='img243' src={img19} alt="galleryone19"/>
         
       </div>
          
          <div className="img-cont2">
          <img className='img244' src={img20} alt="galleryone20"/>
          <img className='img245' src={img21} alt="galleryone21"/>
          </div>
        </div>
    
        <div className="right-img-cont1">
       
         <div className="img-cont3">
         <img className='img246' src={img22} alt="galleryone22"/>
         <img className='img247' src={img23} alt="galleryone23"/>
         </div>
          
          <img className='img248' src={img24} alt="galleryone24"/>
          
        </div>
      </div>
      </div>
      </div>

      );
    }
    export default Galleryone;