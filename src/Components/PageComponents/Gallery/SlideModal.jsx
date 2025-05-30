import React from 'react';
import './CSS/SlideshowModal.css';

const SlideshowModal = ({ images, currentIndex, onClose, onNext }) => {
  return (
    <div className="slideshow-modal">
      <div className="slideshow-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} className="slideshow-image" />
        <button className="next-btn" onClick={onNext}>Next ➤</button>
      </div>
    </div>
  );
};

export default SlideshowModal;
