// import React, { useState, useRef, useEffect } from 'react';
// import '../CSS/Prawas.css';

// import img1 from '../Images/image 8.jpg'
// import img2 from '../Images/kaviSamelan.jpg'
// import img3 from '../Images/image 9.png'
// import img4 from '../Images/image 5.jpg'



  
// const Prawas = () => {
  
  

//   const years = [1992, '2022-23', 2024, 2025];
//   const events = {
//     1992: {
//       date: '१ मे १९१९',
//       title: 'इतिहास',
//       description: 'ही ऐतिहासिक घटना आहे ज्याने आपल्या देशाच्या स्वातंत्र्य चळवळीला गती दिली.',
//       images: [
//         '/images/1919-1.jpg',
//         '/images/1919-2.jpg',
//         '/images/1919-3.jpg',
//       ],
//     },
//     '2022-23': {
//       date: '१ मे २०२२-२३',
//       title: 'साहित्य महोत्सव',
//       description: 'या कालावधीत विविध साहित्यकृतींचा गौरव करण्यात आला.',
//       images: [
//         '/images/2022-1.jpg',
//         '/images/2022-2.jpg',
//         '/images/2022-3.jpg',
//       ],
//     },
//     2024: {
//       date: '१ मे २०२४',
//       title: 'कविता महोत्सव',
//       description: 'हा एक साहित्यिक उत्सव आहे ज्यामध्ये विविध कवी आपली कविता सादर करतात. या महोत्सवात विविध विषयांवर आधारित कविता ऐकायला मिळतात आणि नवीन प्रतिभावान कवींना एक व्यासपीठ मिळते. रसिक प्रेक्षकांसाठी हा एक सांस्कृतिक आनंदाचा अनुभव असतो.',
//       images: [
//         img1,
//         img2,
//         img3,
//         img4,
//       ],
//     },
//     2025: {
//       date: '१ मे २०२५',
//       title: 'नवीन पर्व',
//       description: 'या वर्षी नवीन सांस्कृतिक उपक्रम राबवण्यात आले.',
//       images: [
//         '/images/2025-1.jpg',
//         '/images/2025-2.jpg',
//         '/images/2025-3.jpg',
//       ],
//     },
//   };


//   const [currentIndex, setCurrentIndex] = useState(2); // Start with 2024

//   const dotRefs = useRef([]);

//   useEffect(() => {
//     if (dotRefs.current[currentIndex]) {
//       dotRefs.current[currentIndex].scrollIntoView({
//         behavior: 'smooth',
//         inline: 'center',
//         block: 'nearest'
//       });
//     }
//   }, [currentIndex]);

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < years.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     }
//   };

//   const currentYear = years[currentIndex];
//   const currentEvent = events[currentYear];



// return (





//   <div className='Prawas-Container'>
//     <div className='Prawas-head'>
    
//    <h2 className='Prawas-heading'><span>आमचा</span> प्रवास</h2>
//    </div>
//    <div className="timeline-container">
//       {/* Timeline Bar */}
//       <div className="timeline-bar">
//         <div className="timeline-line">
//           {years.map((year, idx) => (
//             <div
//               key={idx}
//               className={`timeline-dot ${idx === currentIndex ? 'active' : ''}`}
//               style={{ left: `${(idx / (years.length - 1)) * 100}%` }}
//             />
//           ))}
//         </div>
//         <div className="timeline-years">
//           {years.map((year, idx) => (
//             <div key={idx} className={`timeline-year ${idx === currentIndex ? 'selected' : ''}`}>
//               {year}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Event Details */}
//       <div className="event-section">
//         <button onClick={handlePrev} disabled={currentIndex === 0} className="arrow-button"><i className="fa-solid fa-caret-left"></i></button>
//         <div className="event-content">
//         <h2 className="event-date">{currentEvent.date}</h2>
//           <h3 className="event-title">{currentEvent.title}</h3>
//           <p className="event-description">{currentEvent.description}</p>
//         </div>
//         <button onClick={handleNext} disabled={currentIndex === years.length - 1} className="arrow-button">  <i className="fa-solid fa-caret-right"></i> </button>
//       </div>

//       {/* Event Images */}
//       <div className="event-images">
//         {currentEvent.images.map((imgSrc, idx) => (
//           <img key={idx} src={imgSrc} alt="event" className="event-image" />
//         ))}
//       </div>
//     </div>



//   </div>
// )

// };

// export default Prawas;

import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Prawas.css';

import img1 from '../Images/image 8.jpg';
import img2 from '../Images/kaviSamelan.jpg';
import img3 from '../Images/image 9.png';
import img4 from '../Images/image 5.jpg';

const Prawas = () => {
  const years = [1992, '2022-23', 2024, 2025];

  const events = {
    1992: {
      date: '१ मे १९९२',
      title: 'इतिहास',
      description: 'ही ऐतिहासिक घटना आहे ज्याने आपल्या देशाच्या स्वातंत्र्य चळवळीला गती दिली.',
      images: ['/images/1919-1.jpg', '/images/1919-2.jpg', '/images/1919-3.jpg'],
    },
    '2022-23': {
      date: '१ मे २०२२-२३',
      title: 'साहित्य महोत्सव',
      description: 'या कालावधीत विविध साहित्यकृतींचा गौरव करण्यात आला.',
      images: ['/images/2022-1.jpg', '/images/2022-2.jpg', '/images/2022-3.jpg'],
    },
    2024: {
      date: '१ मे २०२४',
      title: 'कविता महोत्सव',
      description:
        'हा एक साहित्यिक उत्सव आहे ज्यामध्ये विविध कवी आपली कविता सादर करतात. या महोत्सवात विविध विषयांवर आधारित कविता ऐकायला मिळतात आणि नवीन प्रतिभावान कवींना एक व्यासपीठ मिळते.',
      images: [img1, img2, img3, img4],
    },
    2025: {
      date: '१ मे २०२५',
      title: 'नवीन पर्व',
      description: 'या वर्षी नवीन सांस्कृतिक उपक्रम राबवण्यात आले.',
      images: ['/images/2025-1.jpg', '/images/2025-2.jpg', '/images/2025-3.jpg'],
    },
  };

  const [currentIndex, setCurrentIndex] = useState(2); // Default to 2024
  const dotContainerRef = useRef(null);

  const scrollToCenter = (index) => {
    const container = dotContainerRef.current;
    const dot = container?.children[index];
    if (dot && container) {
      const offset = dot.offsetLeft - container.offsetWidth / 2 + dot.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToCenter(currentIndex);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + years.length) % years.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % years.length);
  };

  const currentYear = years[currentIndex];
  const currentEvent = events[currentYear];

  return (
    <div className="Prawas-Container">
      <header className="Prawas-head">
        <h2 className="Prawas-heading">
          <span>आमचा</span> प्रवास
        </h2>
      </header>

      <section className="timeline-container" aria-label="प्रवास टाइमलाइन">
        {/* Timeline Dots and Years */}
        <nav className="timeline-bar" aria-label="वार्षिक प्रवास निवड">
          <div className="timeline-line" aria-hidden="true">
            <div className="timeline-dots-wrapper" ref={dotContainerRef}>
              {years.map((year, idx) => (
                <button
                  key={idx}
                  aria-label={`Select year ${year}`}
                  aria-pressed={idx === currentIndex}
                  className={`timeline-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="timeline-years">
            {years.map((year, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`timeline-year ${idx === currentIndex ? 'selected' : ''}`}
                type="button"
              >
                {year}
              </button>
            ))}
          </div>
        </nav>

        {/* Event Section */}
        <article className="event-section" aria-live="polite">
          <button
            onClick={handlePrev}
            className="arrow-button"
            aria-label="मागील घटना"
            type="button"
          >
            <i className="fa-solid fa-caret-left" aria-hidden="true"></i>
          </button>

          <div className="event-content">
            <h3 className="event-date">{currentEvent.date}</h3>
            <h2 className="event-title">{currentEvent.title}</h2>
            <p className="event-description">{currentEvent.description}</p>
          </div>

          <button
            onClick={handleNext}
            className="arrow-button"
            aria-label="पुढील घटना"
            type="button"
          >
            <i className="fa-solid fa-caret-right" aria-hidden="true"></i>
          </button>
        </article>

        {/* Event Images */}
        <div className="event-images" aria-label="घटनेचे फोटो">
          {currentEvent.images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${currentEvent.title} - फोटो ${idx + 1}`}
              className="event-image"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Prawas;
