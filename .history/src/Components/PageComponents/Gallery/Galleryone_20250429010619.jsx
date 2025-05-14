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
 
   <div className="Gallery-Container-ss">

<div className="Gallery-HeroSection">
<div className="Head-Hero">
  <h3 className="Hero-Heading">संमेलन छायाचित्रे</h3>
  <p className="Hero-info"> "शब्दांच्या सुरांनी सजलेली कविसंमेलनाची गॅलरी!"</p>
  </div>
</div>


<div className="left-img-cont">

  <div className="img-container-1">
    <img src={img17} className="img17"></img>
    <img src={img18} className="img18"></img>
    <img src={img19} className="img19"></img>
  </div>


  <div className="img-container-2">
    <img src={img20} className="img20"></img>
    <img src={img21} className="img21"></img>

  </div>
</div>
<div






   </div>


      );
    }
    export default Galleryone;