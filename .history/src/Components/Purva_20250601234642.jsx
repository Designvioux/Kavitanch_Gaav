import React from "react";
import "./CSS/Purva.css";
import img1 from "../Images/Rectangle 3.png";
import img2 from "../Images/Rectangle 4.png";
import img3 from "../Images/Rectangle 5.png";
import img4 from "../Images/Rectangle 6.png";
import Calendar from "../Icons/Calendar.png";
import Clock from "../Icons/Clock.png";
import Loc from "../Icons/Location.png";
import { Link } from "react-router-dom";
const events = [
  {
    image: img1,
    title: "‘गावकुसाबाहेर कविता’",
    place: "प्राचीन वडाचं मंदिर",
    topic: "गावाचं कवितेत प्रतिबिंब",
    details: "३० कवी, स्थानिक रसिक प्रेक्षक",
    date: "०४ मे",
  },
  {
    image: img2,
    title: "‘श्रावण कविता मैफल’",
    place: "जिल्हा परिषद हॉल",
    topic: "पावसाच्या रात्री, मोकळ्या सभागृहात",
    details: "३० कवी, स्थानिक रसिक प्रेक्षक",
    date: "०४ मे",
  },
  {
    image: img3,
    title: "‘कविता आणि सामाजिक जाणीव’",
    place: "जिल्हा परिषद हॉल",
    topic: "स्त्रीवाद, पर्यावरण, लोकशाही विशेष",
    details: "कविता आणि क्रांती",
    date: "०४ मे",
  },
  {
    image: img4,
    title: "‘कवितेचं महाकुंभ’",
    place: "जिल्हा परिषद हॉल",
    topic: "५० जिल्ह्यांतील १०० कवी",
    details: "कवितांची छायाचित्रे + हस्ताक्षर संग्रह",
    date: "०४ मे",
  },
];

const Purvkaryakram = () => {
  return (
    <div className="Purva-Container">
      

      <div className="Purva-event-container">
        {events.map((event, index) => (
          <div className="Purva-event-card-cont" key={index}>
          <div
  className="Purva-event-image"
  style={{ backgroundImage: `url("${event.image}")` }}
>

              <div className="Purva-event-date">
                <img src={Calendar} className="Calendar-icon" alt="calendar" />
                <p>{event.date}</p>
              </div>

              <div className="Purva-event-info">
                <h3 className="Purva-event-title">{event.title}</h3>
                <p className="Purva-event-desc">{event.topic}</p>
                <div className="Purva-event-icons">
                  <span className="Purva-icon-text">
                    <img src={Clock} className="info-icon" alt="clock" /> संध्याकाळी ५ वाजता
                  </span>
                  <span className="Purva-icon-text">
                    <img src={Loc} className="Purvainfo-icon" alt="location" /> {event.place}
                  </span>
                </div>
                
                <p className="Purva-event-descc">{event.details}</p>
                 <Link to ="/Answer"
                  className="Purva-purva-button">
                  वाचा
                </Link>
              </div>
              
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Purvkaryakram;
