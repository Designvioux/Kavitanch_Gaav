import React from "react";
import "./CSS/Object.css";
import ebook from "../Images/Ebook.png";
import diwali from "../Images/Diwali.png";
import magazine from "../Images/Masik.png";
import { Link } from 'react-router-dom';

const AamchaSahityaSection = () => {
  return (
    <section className="aamcha-section">
      <h2 className="aamcha-title">
        <span className="orange-text">आमचं</span> साहित्य
      </h2>

      <p className="aamcha-description">
        कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील.
      </p>

      {/* First Card */}
      <div className="aamcha-content">
        <div className="aamcha-image">
          <img src={ebook} alt="ई-बुक" />
        </div>
        <div className="aamcha-card">
          <h3 className="ebook-title">ई – बुक</h3>
          <p className="ebook-desc">
            कवितांचं गाव प्लॅटफॉर्मवर खास मराठी कवींसाठी curated ई-पुस्तकांचा संग्रह उपलब्ध आहे. विविध विषयांवरील निवडक कविता, संग्रहित दिवाळी अंक, आणि विशेष साहित्यिक अंक इथे मोफत किंवा प्रीमियम स्वरूपात वाचता येतील.
          </p>
          <div className="ebook-buttons">
           <Link  className="read-button" to="/Blog">वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="aamcha-content">
        <div className="aamcha-image">
          <img src={diwali} alt="दिवाळी अंक" />
        </div>
        <div className="aamcha-card">
          <h3 className="ebook-title">दिवाळी अंक</h3>
          <p className="ebook-desc">
          प्रत्येक वर्षी प्रकाशित होणारा खास दिवाळी अंक म्हणजे नव्या प्रतिभेला वाव देणारा साहित्यिक उत्सव! जकतवाडी आणि जगभरातील मराठी कवींनी लिहिलेल्या दर्जेदार कविता, लघुकथा, लेख आणि अनुभवांचे संकलन इथे वाचायला मिळेल.          </p>
          <div className="ebook-buttons">
            <button className="read-button">वाचा</button>    <Link  className="read-button" to="/Blog">वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="aamcha-content">
        <div className="aamcha-image">
          <img src={magazine} alt="मासिक" />
        </div>
        <div className="aamcha-card">
          <h3 className="ebook-title">मासिक</h3>
          <p className="ebook-desc">
          प्रत्येक महिन्यात प्रकाशित होणारं आमचं खास साहित्यिक मासिक – नवोदित आणि प्रस्थापित कवींना एकत्र आणणारं हृदयस्पर्शी व्यासपीठ. विविध कविता, लेख, संवाद आणि प्रेरणादायी साहित्य यांचा संगम – केवळ "कवितांचं गाव" मासिकात!</p>
          <div className="ebook-buttons">
            <button className="read-button">वाचा</button>    <Link  className="read-button" to="/Blog">वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AamchaSahityaSection;
