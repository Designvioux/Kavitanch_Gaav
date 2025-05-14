import React from "react";
import "./CSS/Purva.css";
import img1 from "../Images/Rectangle 3.png";
import img2 from "../Images/Rectangle 4.png";
import img3 from "../Images/Rectangle 5.png";
import img4 from "../Images/Rectangle 6.png";

function Purvkaryakram() {
  const events = [
    {
      image: img1,
      title: "‘गावकुसाबाहेर कविता’",
     place: "प्राचीन वडाचं मंदिर ",
      topic: "गावाचं कवितेत प्रतिबिंब",
      details:"३० कवी,स्थानिक रसिक प्रेक्षक ",
      date: "१४ ऑगस्ट, २०२४",
      
    },
    {
      image: img2,
      title: "‘श्रावण कविता मैफल’" ,
      place: "जिल्हा परिषद हॉल",
       topic: "पावसाच्या रात्री, मोकळ्या सभागृहात ",
        details: "३० कवी, स्थानिक रसिक प्रेक्षक",
        date:"१३ सप्टेंबर, २०२४",
    },
    {
      image: img3,
      title: "‘कविता आणि सामाजिक जाणीव’" ,
      place: "जिल्हा परिषद हॉल",
      topic: "स्त्रीवाद, पर्यावरण, लोकशाही विशेष",
      details: "कविता आणि क्रांती",
      date: "१० आँक्टोंबर, २०२४"
    },
    {
      image: img4,
      title:" ‘कवितेचं महाकुंभ’",
      place: "जिल्हा परिषद हॉल",
      topic: "५० जिल्ह्यांतील १०० कवी",
      details: "कवितांची छायाचित्रे + हस्ताक्षर संग्रह",
      date: "१८ नोव्हेंबर, २०२४",
    }
  ];

  return (
    <div className="purvkaryakram-container">
      <div className="purvkaryakram-heading">
        <h1 className="purvkaryakram-heading-main">
          <span className="purvkaryakram-orange">पुर्व </span>
          <span className="purvkaryakram-black">कार्यक्रम</span>
        </h1>
        <p className="purvkaryakram-heading-second">
          कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील. मराठी भाषेच्या सौंदर्यात गुंफलेली ही कवितांची दुनिया तुम्हाला विचारशीलही करेल आणि भावनांनी भारावूनही टाकेल.
        </p>
      </div>

      <div className="purvkaryakram-event-grid">
        {events.map((event, index) => (
          <div className="purvkaryakram-event-card" key={index}>
            <img src={event.image} alt={event.title} className="purvkaryakram-event-image" />
            <div className="purvkaryakram-event-info">
              <p className="event-title">{event.title}</p>
              <p><strong>स्थान:</strong> {event.place}</p>
              <p><strong>विषय:</strong> "{event.topic}"</p>
              <p><strong>सहभागी:</strong> {event.details}</p>
              <p className="event-date">{event.date}</p>
            </div>
            
                    
          </div>
        ))}
        </div>
        <div className="view-all-button">
        <a href="/events" className="btn order_now btn_Brand">
          View All
        </a>
       </div>
    </div>
  );
}

export default Purvkaryakram;