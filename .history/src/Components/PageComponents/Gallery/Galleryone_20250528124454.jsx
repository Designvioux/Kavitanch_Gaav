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
//     export default Galleryone;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CSS/Gallery.css';
import SlideshowModal from './SlideshowModal'; // ✅

import img1 from "../Images/Gallery/Gallery1.png";
import img2 from "../Images/Gallery/Gallery2.png"; 
import img3 from "../Images/Gallery/Gallery3.png";
import img4 from "../Images/Gallery/Gallery4.png";
// ...other imports

const Gallery = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (imagesArray, startIndex = 0) => {
    setModalImages(imagesArray);
    setCurrentIndex(startIndex);
    setModalOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % modalImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-image-container">

        <div className="image-cont1" onClick={() => handleOpenModal([img1, img2, img3, img4])}>
          <img className='img1' src={img1} alt="Gallery1" />
          <div className="right-img-cont">
            <img className='img2' src={img2} alt="gallery2" />
            <img className='img3' src={img3} alt="gallery3" />
            <img className='img4' src={img4} alt="gallery4" />
          </div>
        </div>

        {/* Repeat for other containers */}
        <div className="images-cont2" onClick={() => handleOpenModal([img5, img6, img07, img7])}>
          {/* images */}
        </div>

        <div className="image-cont3" onClick={() => handleOpenModal([img8, img9, img10, img11])}>
          {/* images */}
        </div>

        <div className="image-cont4" onClick={() => handleOpenModal([img12, img13, img14, img15])}>
          {/* images */}
        </div>

      </div>

      <div className='View-More'>
        <button onClick={() => navigate('/galleryone')} className='view-more'>View More</button>
      </div>

      <SlideshowModal
        isOpen={modalOpen}
        images={modalImages}
        currentIndex={currentIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Gallery;
