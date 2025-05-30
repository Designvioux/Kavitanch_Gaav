// import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './CSS/Gallery.css';
// import img1 from "../Images/Gallery/Gallery1.png";
// import img2 from "../Images/Gallery/Gallery2.png"; 
// import img3 from "../Images/Gallery/Gallery3.png";
// import img4 from "../Images/Gallery/Gallery4.png";
// import img5 from "../Images/Gallery/Gallery5.png";
// import img6 from "../Images/Gallery/Gallery6.png";
// import img7 from "../Images/Gallery/Gallery7.png";
// import img07 from "../Images/Gallery/Gallery07.png";
// import img8 from "../Images/Gallery/Gallery8.png";
// import img9 from "../Images/Gallery/Gallery9.png";
// import img10 from "../Images/Gallery/Gallery10.png";
// import img11 from "../Images/Gallery/Gallery11.png";
// import img12 from "../Images/Gallery/Gallery12.png";
// import img13 from "../Images/Gallery/Gallery13.png";
// import img14 from "../Images/Gallery/Gallery14.png";
// import img15 from "../Images/Gallery/Gallery15.png";

// const Gallery = () => {

//   const navigate = useNavigate(); 
//   const handleViewMore = () => {
//     navigate('/galleryone'); 

//   return (
//     <div className="gallery-container">



// <div className="gallery-image-container">

//       <div className="image-cont1">

//         <img className='img1' src={img1} alt="Gallery1" />
//         <div className="right-img-cont">
//           <img className='img2' src={img2} alt="gallery2"/>
//           <img className='img3' src={img3} alt="gallery3"/>
//           <img className='img4' src={img4} alt="gallery4"/>
//         </div>
//       </div>

//       <div className="images-cont2">
//       <img className='img-11' src={img5} alt="Gallery5" />
//         <div className="right-img-cont">
//           <img className='img-22' src={img6} alt="gallery6"/>
//           <img className='img-33' src={img07} alt="gallery07"/>
//           {/* <div className="right-bottom-img"> */}
//           <img className='img-44' src={img7} alt="gallery7"/>
//           {/* </div> */}
//         </div>
       
//       </div>

//       <div className="image-cont3">
//       <img className='img111' src={img8} alt="Gallery8" />
//         <div className="right-img-cont">
//           <img className='img222' src={img9} alt="gallery9"/>
//           <img className='img333' src={img10} alt="gallery10"/>
//           {/* <div className="right-bottom-img"> */}
//           <img className='img444' src={img11} alt="gallery11"/>
//           {/* </div> */}
//         </div>
       
//       </div>

      
//       <div className="image-cont4">
//       <img className='img1111' src={img12} alt="Gallery12" />
//         <div className="right-img-cont">
//           <img className='img2222' src={img13} alt="gallery13"/>
//           <img className='img3333' src={img14} alt="gallery14"/>
//           {/* <div className="right-bottom-img"> */}
//           <img className='img4444' src={img15} alt="gallery15"/>
//           {/* </div> */}
//         </div>
       
//       </div>
// </div>
// <div className='View-More'>
// <button  onClick={handleViewMore}className='view-more'>View More</button></div>
//       </div>
     
//   );
// };
// }

// export default Gallery;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CSS/Gallery.css';
import {
  img1, img2, img3, img4, img5, img6, img7,
  img07, img8, img9, img10, img11, img12,
  img13, img14, img15
} from '../Images/Gallery/'; // Optional: you can create a single import file

const images = [
  img1, img2, img3, img4, img5, img6, img07,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15
];

const Gallery = () => {
  const navigate = useNavigate(); 
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleViewMore = () => {
    navigate('/galleryone'); 
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    setLoading(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrev = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            onClick={() => openModal(index)}
            className="gallery-image"
          />
        ))}
      </div>

      <div className='View-More'>
        <button onClick={handleViewMore} className='view-more'>View More</button>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <button className="arrow left" onClick={showPrev}>&#10094;</button>
            <div className="modal-image-wrapper">
              {loading && <div className="loader">Loading...</div>}
              <img
                src={images[currentIndex]}
                alt="Slideshow"
                className="modal-image"
                onLoad={() => setLoading(false)}
              />
            </div>
            <button className="arrow right" onClick={showNext}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

