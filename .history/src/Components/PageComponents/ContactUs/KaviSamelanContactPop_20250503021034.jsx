import React from 'react';
import './CSS/KaviSamelanContactPop.css';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import img from './Images/Vector.png';
import img1 from './Images/schedule_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import img2 from './Images/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import nameIcon from './Images/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import mailIcon from './Images/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import callIcon from './Images/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import feedbackIcon from './Images/feedback_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import penIcon from './Images/stylus_fountain_pen_24dp_000000_FILL0_wght400_GRAD0_opsz24 1.png';

const ContactPop = ({ onClose }) => {

  
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}><IoClose /></button>

        <div className="popup-header">
          <h2 className="popup-subtitle">कवी संमेलन</h2>
          <div className="popup-info">
            <span><img src={img} alt="calendar" className="date-img" /></span>
            <span className="popup-date">४ मे २०२५</span>
            <span><img src={img1} alt="schedule" className="date-img" /></span>
            <span className="popup-date">संध्याकाळी ५ वाजता</span>
            <span><img src={img2} alt="location" className="date-img" /></span>
            <span className="popup-date">जकातवाडी, सातारा</span>
          </div>
        </div>

        <form className="popup-form">
          <h3 className="popup-title">आता नोंदणी करा</h3>

          <div className="popup-form-row">
            <div className="popup-form-group">
              <img src={nameIcon} alt="Name" />
              <input type="text" placeholder="पूर्ण नाव" />
            </div>
            <div className="popup-form-group">
              <img src={mailIcon} alt="Email" />
              <input type="email" placeholder="ई - मेल" />
            </div>
          </div>

          <div className="popup-form-row">
            <div className="popup-form-group">
              <img src={callIcon} alt="Phone" />
              <input type="text" placeholder="मोबाईल नंबर" />
            </div>
            <div className="popup-form-group">
              <img src={penIcon} alt="Poet" />
              <select>
                <option>तुम्ही कवी आहात का?</option>
                <option>होय</option>
                <option>नाही</option>
              </select>
            </div>
          </div>

          <div className="popup-form-group full-width">
            <img src={feedbackIcon} alt="Feedback" className="popup-form-icon" />
            <textarea placeholder="काही विशेष सूचना किंवा विचारायचं आहे का?"></textarea>
          </div>

          <button type="submit" className="popup-submit-btn">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPop;