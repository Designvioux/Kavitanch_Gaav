import React from 'react'

import './CSS/Prastavit.css';
import shivar from '../Images/Shivar-Samelan.jpg';
import kavikatta from '../Images/Kavi-Kattta.jpg';
import Calendar from '../Icons/Calendar.png';
import Clock from '../Icons/Clock.png';
import Loc from '../Icons/Location.png';

const events = [
  {
    id: 1,
    date: "०४ मे",
    title: "कवी संमेलन",
    description: "शब्दांची उधळण, कवितेची उत्सव!",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
  },
  {
    id: 2,
    date: "३० जून",
    title: "कुटुंब कट्टा",
    description: "कुटुंब, गप्पा आणि अनुभवांची गोष्ट येथे!",
    image: kavikatta,
    icon:Calendar,
  },
  {
    id: 3,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 4,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 5,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 6,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 7,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
];


// const Prastavit = () =>{

//   const navigate = useNavigate();

//   const handleRegisterClick = (route) => {
//     navigate(route);
//   };

//   return(

//     <div className='Prastavit-Container'>
// <div className='Prastavit-head'>
//       <h1 className='Prastavit-heading'>  <span className='prastavit'>प्रस्तावित</span>  कार्यक्रम</h1>
//      <p className='Prastavit-info'>नवा कार्यक्रम लवकरच येतोय! काहीतरी खास घेऊन… तयार रहा!</p>
//       </div>
//       <div className="event-container">
//       {events.map((event) => (
//         <div className="event-card-cont" key={event.id}>
//           <div
//             className="event-image"
//             style={{ backgroundImage: `url(${event.image})` }}
//           >
//             <div className="event-date"><img src={event.icon} className='Calendar-icon'/><p>{event.date}</p></div>

//             <div className="event-info">
//             <h3 className="event-title">{event.title}</h3>
//             <p className="event-desc">{event.description}</p>
//             <div className="event-icons">
//               <span className='icon-text' >
//                 <img src={Clock} className='info-icon'></img> संध्याकाळी ५ वाजत
//               </span>
//               <span className='icon-text' >
//                 <img src={Loc} className='info-icon'></img> जकातवाडी, सातारा 
//               </span>
//             </div>
//             <button
//                   className="register-btn"
//                   onClick={() => handleRegisterClick(event.route)}
//                 >
//                   Register Now
//                 </button>
//           </div>
//           </div>
         
//         </div>
//       ))}
//     </div>


//     </div>
//   )


// }


// Prastavit.jsx
const Prastavit = ({ onOpenPopup }) => {


  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 1;
    let autoScroll;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (container) {
          container.scrollLeft += scrollAmount;
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // loop
          }
        }
      }, 20);
    };

    // Only enable auto-scroll for screens < 769px
    if (window.innerWidth < 769) {
      startAutoScroll();
    }

    return () => clearInterval(autoScroll);
  }, []);
  return (
    <div className='Prastavit-Container'>
      <div className='Prastavit-head'>
        <h1 className='Prastavit-heading'>
          <span className='prastavit'>प्रस्तावित</span> कार्यक्रम
        </h1>
        <p className='Prastavit-info'>नवा कार्यक्रम लवकरच येतोय! काहीतरी खास घेऊन… तयार रहा!</p>
      </div>

      <div className="event-container">
        {events.map((event) => (
          <div className="event-card-cont" key={event.id}>
            <div
              className="event-image"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="event-date">
                <img src={event.icon} className='Calendar-icon' alt="calendar" />
                <p>{event.date}</p>
              </div>

              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <div className="event-icons">
                  <span className='icon-text'>
                    <img src={Clock} className='info-icon' alt="clock" /> संध्याकाळी ५ वाजता
                  </span>
                  <span className='icon-text'>
                    <img src={Loc} className='info-icon' alt="location" /> जकातवाडी, सातारा
                  </span>
                </div>
                <button
                  className="register-btn"
                  onClick={() => onOpenPopup(event.id)} // trigger from parent
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prastavit;


