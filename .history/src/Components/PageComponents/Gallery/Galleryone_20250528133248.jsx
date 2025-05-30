// import React from "react";
// import "./CSS/Galleryone.css";

// import img17 from "../Images/Gallery/Galleryone17.png";
// import img18 from "../Images/Gallery/Galleryone18.png";
// import img19 from "../Images/Gallery/Galleryone19.png";
// import img20 from "../Images/Gallery/Galleryone20.png";
// import img21 from "../Images/Gallery/Galleryon21.png";
// import img22 from "../Images/Gallery/Galleryone22.png";
// import img23 from "../Images/Gallery/Galleryone22.png";
// import img24 from "../Images/Gallery/Galleryone24.png";

// const Galleryone = () => {
//   return (
 
//    <div className="Gallery-Container-ss">

// <div className="Gallery-HeroSection">

// <div className="Head-Hero">
//   <h3 className="Hero-Heading">संमेलन छायाचित्रे</h3>
//   <p className="Hero-info"> "शब्दांच्या सुरांनी सजलेली कविसंमेलनाची गॅलरी!"</p>
//   </div>

// </div>

// <div className="img-cont-er">

// <div className="left-img-cont">

//   <div className="img-container-1">
//     <img src={img17} className="img17"></img>
//     <img src={img18} className="img18"></img>
//     <img src={img19} className="img19"></img>
//   </div>


//   <div className="img-container-2">
//     <img src={img21} className="img20"></img>
//     <img src={img17} className="img21"></img>

//   </div>
// </div>
// <div className="rightt-img-cont">
//  <img src={img18}className="img22"></img>
//  <img src={img23}className="img23"></img>
//  <img src={img24}className="img24"></img>


// </div>


// </div>



//    </div>


//       );
//     }
// export default Galleryone;













import React, { useState } from "react";
import "./CSS/G";

import img17 from "../Images/Gallery/Galleryone17.png";
import img18 from "../Images/Gallery/Galleryone18.png";
import img19 from "../Images/Gallery/Galleryone19.png";
import img20 from "../Images/Gallery/Galleryone20.png";
import img21 from "../Images/Gallery/Galleryon21.png";
import img22 from "../Images/Gallery/Galleryone22.png";
import img24 from "../Images/Gallery/Galleryone24.png";

const Galleryone = () => {
  const images = [img17, img18, img19, img20, img21, img22, img24];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Gallery-Container-ss">
      <div className="Gallery-HeroSection">
        <div className="Head-Hero">
          <h3 className="Hero-Heading">संमेलन छायाचित्रे</h3>
          <p className="Hero-info">"शब्दांच्या सुरांनी सजलेली कविसंमेलनाची गॅलरी!"</p>
        </div>
      </div>

      <div className="img-cont-er">
        <div className="left-img-cont">
          <div className="img-container-1">
            <img src={img17} alt="17" onClick={() => openModal(0)} className="img17" />
            <img src={img18} alt="18" onClick={() => openModal(1)} className="img18" />
            <img src={img19} alt="19" onClick={() => openModal(2)} className="img19" />
          </div>

          <div className="img-container-2">
            <img src={img20} alt="20" onClick={() => openModal(3)} className="img20" />
            <img src={img21} alt="21" onClick={() => openModal(4)} className="img21" />
          </div>
        </div>

        <div className="rightt-img-cont">
          <img src={img22} alt="22" onClick={() => openModal(5)} className="img22" />
          <img src={img24} alt="24" onClick={() => openModal(6)} className="img24" />
        </div>
      </div>

      {/* Modal Slideshow */}
      {modalOpen && (
        <div className="modal-overlay">
          <span className="modal-close" onClick={closeModal}>×</span>
          <img src={images[currentIndex]} alt="Full View" className="modal-image" />
          <button className="nav-btn left" onClick={prevImage}>❮</button>
          <button className="nav-btn right" onClick={nextImage}>❯</button>
        </div>
      )}
    </div>
  );
};

export default Galleryone;
