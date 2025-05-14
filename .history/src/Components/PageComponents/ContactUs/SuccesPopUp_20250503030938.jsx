import React from 'react';
import './CSS/SuccesPopUp.css';
import { IoClose } from 'react-icons/io5';
import checkIcon from './Images/check_circle_24dp_000000_FILL1_wght400_GRAD0_opsz24 1.png';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className='spopup-overlay'>
      <div className="spopup-container">
        <button className="spopup-close-btn" onClick={onClose}>
          <IoClose size={20} />
        </button>

        <img src={checkIcon} alt="Success" className="spopup-icon" />
        <h2 className="spopup-title">नोंदणी यशस्वी!</h2>
        <p className="spopup-message">आपली नोंदणी यशस्वी झाली आहे!</p>
        <p className="spopup-subtext">आपला अमूल्य सहभागाबद्दल धन्यवाद!</p>
        <button className="spopup-ok-btn" onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
