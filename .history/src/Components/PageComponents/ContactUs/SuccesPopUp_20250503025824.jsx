import React, { useState } from 'react';
import './CSS/SuccesPopUp.css';
import { IoClose } from 'react-icons/io5';
import checkIcon from './Images/check_circle_24dp_000000_FILL1_wght400_GRAD0_opsz24 1.png';

const SuccessPopup = ({ onClose }) => {


  return (
    <div className='main-popup'>
    <div className="success-popup">
    <button className="close-btn" onClick={onClose}>
  <IoClose size={20} />
</button>
      </button>
      <img src={checkIcon} alt="Success" className="success-icon" />
      <h2 className="title">नोंदणी यशस्वी!</h2>
      <p className="message">आपली नोंदणी यशस्वी झाली आहे!</p>
      <p className="subtext">आपला अमूल्य सहभागाबद्दल धन्यवाद!</p>
      <button className="ok-btn" onClick={onClose}>Ok</button>
    </div>
    </div>
  );
};

export default SuccessPopup;