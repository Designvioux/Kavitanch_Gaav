import React from 'react';
import './CSS/AnswerTwo.css';
import img1 from "../Images/Gallery/Rectangle 74.png"
import img2 from "../Images/Gallery/Rectangle 3.png";
import img3 from "../Images/Gallery/Rectangle 4.png";
import img4 from "../Images/Gallery/Rectangle 5.png";
import img5 from "../Images/Gallery/Rectangle 6.png";

const events = [
    {
        image: img2,
        title: "‘गावकुसाबाहेर कविता’",
       place: "प्राचीन वडाचं मंदिर ",
        topic: "गावाचं कवितेत प्रतिबिंब",
        details:"३० कवी,स्थानिक रसिक प्रेक्षक ",
        date: "१४ ऑगस्ट, २०२४",
        
      },
      {
        image: img3,
        title: "‘श्रावण कविता मैफल’" ,
        place: "जिल्हा परिषद हॉल",
         topic: "पावसाच्या रात्री, मोकळ्या सभागृहात ",
          details: "३० कवी, स्थानिक रसिक प्रेक्षक",
          date:"१३ सप्टेंबर, २०२४",
      },
      {
        image: img4,
        title: "‘कविता आणि सामाजिक जाणीव’" ,
        place: "जिल्हा परिषद हॉल",
        topic: "स्त्रीवाद, पर्यावरण, लोकशाही विशेष",
        details: "कविता आणि क्रांती",
        date: "१० आँक्टोंबर, २०२४"
      },
      {
        image: img5,
        title:" ‘कवितेचं महाकुंभ’",
        place: "जिल्हा परिषद हॉल",
        topic: "५० जिल्ह्यांतील १०० कवी",
        details: "कवितांची छायाचित्रे + हस्ताक्षर संग्रह",
        date: "१८ नोव्हेंबर, २०२४",
      },
      {
      image: img3,
        title: "‘श्रावण कविता मैफल’" ,
        place: "जिल्हा परिषद हॉल",
         topic: "पावसाच्या रात्री, मोकळ्या सभागृहात ",
          details: "३० कवी, स्थानिक रसिक प्रेक्षक",
          date:"१३ सप्टेंबर, २०२४",
      },
      {
        image: img4,
        title: "‘कविता आणि सामाजिक जाणीव’" ,
        place: "जिल्हा परिषद हॉल",
        topic: "स्त्रीवाद, पर्यावरण, लोकशाही विशेष",
        details: "कविता आणि क्रांती",
        date: "१० आँक्टोंबर, २०२४"
      }
    ];
  
const AnswerTwo = () => {
  return (
    <div className="contact-section">
     <img
        src={img1}
        alt="Library"
        className="background-image"
      />
      <div className="overlay-text">
      <h2 className="events-title">
      <span className="orange">पुर्व </span>
      <span className="white">कार्यक्रम</span>
      </h2>
    
      </div>
    
    
    
    
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">

            <div className="event-content">
            <img src={event.image} alt={event.title} />
              <h3 className="event-title">{event.title}</h3>
              <p className="event-place">{event.place}</p>
              <p className="event-subject">{event.subject}</p>
              <p className="event-topic">{event.topic}</p>
              <p className="event-topic">{event.details}</p>
              <span className="event-date">{event.date}</span>


              <div className="event-footer">
  {event.link ? (
    <Link to={event.link} className="event-status">वाचा</Link>
  ) : (
    <button className="event-status">वाचा</button>
  )}
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default AnswerTwo;
