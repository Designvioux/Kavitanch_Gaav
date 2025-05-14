import React from 'react';
import './CSS/KaviSamelanContactPop.css';
import { IoClose } from 'react-icons/io5';

import calendarIcon from './Images/Vector.png';
import timeIcon from './Images/schedule_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import locationIcon from './Images/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import nameIcon from './Images/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import mailIcon from './Images/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import callIcon from './Images/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import feedbackIcon from './Images/feedback_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import penIcon from './Images/stylus_fountain_pen_24dp_000000_FILL0_wght400_GRAD0_opsz24 1.png';

const ContactPop = ({ onClose, setShowSuccessPopup, selectedEvent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      setShowSuccessPopup(true);
    }, 0);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          <IoClose />
        </button>

        <div className="popup-header">
          <h2 className="popup-subtitle">{selectedEvent?.title || 'कवी संमेलन'}</h2>
          <div className="popup-info">
            <span><img src={calendarIcon} alt="calendar" className="date-img" /></span>
            <span className="popup-date">{selectedEvent?.date || '४ मे २०२५'}</span>
            <span><img src={timeIcon} alt="schedule" className="date-img" /></span>
            <span className="popup-date">संध्याकाळी ५ वाजता</span>
            <span><img src={locationIcon} alt="location" className="date-img" /></span>
            <span className="popup-date">जकातवाडी, सातारा</span>
          </div>
        </div>

        <form className="popup-form" onSubmit={handleSubmit}>
          <h3 className="popup-title">आता नोंदणी करा</h3>

          <div className="popup-form-row">
            <div className="popup-form-group">
              <img src={nameIcon} alt="Name" />
              <input type="text" placeholder="पूर्ण नाव" required />
            </div>
            <div className="popup-form-group">
              <img src={mailIcon} alt="Email" />
              <input type="email" placeholder="ई - मेल" required />
            </div>
          </div>

          <div className="popup-form-row">
            <div className="popup-form-group">
              <img src={callIcon} alt="Phone" />
              <input type="tel" placeholder="मोबाईल नंबर" required />
            </div>
            <div className="popup-form-group">
              <img src={penIcon} alt="Poet" />
              <select required>
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

          <button type="submit" className="popup-submit-btn">नोंदणी करा</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPop;
