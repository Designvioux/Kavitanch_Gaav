import React from 'react'

  
const Prawas = () => {

return (

  



  <div className='Prawas-Container'>
   <h2><span>आमचा</span>प्रवास</h2>

   <div className="timeline-container">
      {/* Timeline Bar */}
      <div className="timeline-bar">
        <div className="timeline-line">
          {years.map((year, idx) => (
            <div
              key={idx}
              className={`timeline-dot ${idx === currentIndex ? 'active' : ''}`}
              style={{ left: `${(idx / (years.length - 1)) * 100}%` }}
            />
          ))}
        </div>
        <div className="timeline-years">
          {years.map((year, idx) => (
            <div key={idx} className={`timeline-year ${idx === currentIndex ? 'selected' : ''}`}>
              {year}
            </div>
          ))}
        </div>
      </div>

      {/* Event Details */}
      <div className="event-section">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="arrow-button">←</button>
        <div className="event-content">
          <h2 className="event-date">{currentEvent.date}</h2>
          <h3 className="event-title">{currentEvent.title}</h3>
          <p className="event-description">{currentEvent.description}</p>
        </div>
        <button onClick={handleNext} disabled={currentIndex === years.length - 1} className="arrow-button">→</button>
      </div>

      {/* Event Images */}
      <div className="event-images">
        {currentEvent.images.map((imgSrc, idx) => (
          <img key={idx} src={imgSrc} alt="event" className="event-image" />
        ))}
      </div>
    </div>



  </div>
)

};

export default Prawas;