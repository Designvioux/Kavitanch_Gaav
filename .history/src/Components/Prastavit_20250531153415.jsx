import React, { useEffect, useState, useRef } from 'react';
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
    route: "/KaviSamelanPop",

  },
  {
    id: 3,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",

  },
  {
    id: 4,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
  },
  {
    id: 5,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
  },
  {
    id: 6,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
  },
  {
    id: 7,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
    
  },
];

const Prastavit = ({ onOpenPopup }) => {

  const [showPopup, setShowPopup] = useState(false);
const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className='Prastavit-Container'>
      
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
                  onClick={() => {
                    setSelectedEvent(event); // pass full event
                    setShowPopup(true);
                  }}

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


