import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Prawas.css';

import img1 from '../Images/image 8.jpg'
import img2 from '../Images/kaviSamelan.jpg'
import img3 from '../Images/image 9.png'
import img4 from '../Images/image 5.jpg'



  
const Prawas = () => {
  const years = [1992, '2022-23', 2024, 2025];
  const [currentIndex, setCurrentIndex] = useState(2); // Start with 2024
  const timelineRef = useRef(null);

  // Scroll to center the selected year
  useEffect(() => {
    if (timelineRef.current) {
      const timeline = timelineRef.current;
      const yearElements = timeline.querySelectorAll('.timeline-year');
      if (yearElements[currentIndex]) {
        const element = yearElements[currentIndex];
        const containerWidth = timeline.offsetWidth;
        const elementLeft = element.offsetLeft;
        const elementWidth = element.offsetWidth;
        
        timeline.scrollTo({
          left: elementLeft - (containerWidth / 2) + (elementWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < years.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const currentYear = years[currentIndex];
  const currentEvent = events[currentYear];

  return (
    <div className='Prawas-Container'>
      <div className='Prawas-head'>
        <h2 className='Prawas-heading'><span>आमचा</span> प्रवास</h2>
      </div>
      <div className="timeline-container">
        {/* Timeline Bar */}
        <div className="timeline-scroll-container" ref={timelineRef}>
          <div className="timeline-bar">
            <div className="timeline-line">
              {years.map((year, idx) => (
                <div
                  key={idx}
                  className={`timeline-dot ${idx === currentIndex ? 'active' : ''}`}
                  style={{ left: `${(idx * 100) / (years.length - 1)}%` }}
                />
              ))}
            </div>
            <div className="timeline-years">
              {years.map((year, idx) => (
                <div 
                  key={idx} 
                  className={`timeline-year ${idx === currentIndex ? 'selected' : ''}`}
                  style={{ left: `${(idx * 100) / (years.length - 1)}%` }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="event-section">
          <button onClick={handlePrev} disabled={currentIndex === 0} className="arrow-button">
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <div className="event-content">
            <h2 className="event-date">{currentEvent.date}</h2>
            <h3 className="event-title">{currentEvent.title}</h3>
            <p className="event-description">{currentEvent.description}</p>
          </div>
          <button onClick={handleNext} disabled={currentIndex === years.length - 1} className="arrow-button">
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>

        {/* Event Images */}
        <div className="event-images">
          {currentEvent.images.map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt="event" className="event-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prawas;