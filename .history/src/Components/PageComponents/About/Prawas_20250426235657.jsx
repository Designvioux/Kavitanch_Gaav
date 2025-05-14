import React, { useState } from 'react';
import '../CSS/Prawas.css';
  
const Prawas = () => {


  const years = [1919, '2022-23', 2024, 2025];
  const events = {
    1919: {
      date: '१ मे १९१९',
      title: 'इतिहास',
      description: 'ही ऐतिहासिक घटना आहे ज्याने आपल्या देशाच्या स्वातंत्र्य चळवळीला गती दिली.',
      images: [
        '/images/1919-1.jpg',
        '/images/1919-2.jpg',
        '/images/1919-3.jpg',
      ],
    },
    '2022-23': {
      date: '१ मे २०२२-२३',
      title: 'साहित्य महोत्सव',
      description: 'या कालावधीत विविध साहित्यकृतींचा गौरव करण्यात आला.',
      images: [
        '/images/2022-1.jpg',
        '/images/2022-2.jpg',
        '/images/2022-3.jpg',
      ],
    },
    2024: {
      date: '१ मे २०२४',
      title: 'कविता महोत्सव',
      description: 'हा एक साहित्यिक उत्सव आहे ज्यामध्ये विविध कवी आपली कविता सादर करतात. या महोत्सवात विविध विषयांवर आधारित कविता ऐकायला मिळतात आणि नवीन प्रतिभावान कवींना एक व्यासपीठ मिळते. रसिक प्रेक्षकांसाठी हा एक सांस्कृतिक आनंदाचा अनुभव असतो.',
      images: [
        '/images/2024-1.jpg',
        '/images/2024-2.jpg',
        '/images/2024-3.jpg',
      ],
    },
    2025: {
      date: '१ मे २०२५',
      title: 'नवीन पर्व',
      description: 'या वर्षी नवीन सांस्कृतिक उपक्रम राबवण्यात आले.',
      images: [
        '/images/2025-1.jpg',
        '/images/2025-2.jpg',
        '/images/2025-3.jpg',
      ],
    },
  };


  const [currentIndex, setCurrentIndex] = useState(2); // Start with 2024

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
    <div>
     <h2 className="event-date">{currentEvent.date}</h2>
   <h2 className='Prawas-heading'><span>आमचा</span> प्रवास</h2>
   </div>
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