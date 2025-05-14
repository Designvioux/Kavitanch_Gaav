import React from 'react';
import './CSS/ContactUs.css';
import img from './Images/library-with-books.png';
import name from './Components/Images/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import add from '../Components/Images/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2.png';
import mail from '../Components/Images/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import call from '../Components/Images/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import msg from '../Components/Images/forum_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import note from '../Components/Images/Note.png';

const contactus = () => {
  return (
    <div className="contact-section">
     <img
        src={img}
        alt="Library"
        className="background-image"
      />
      <div className="overlay-text">
        <h1>संपर्क करा</h1>
      </div>
       
      <form className="contact-form">
      <div className='contact-text'>
        <span className='contact-black-text'>आपला अभिप्राय </span>
        <span className='contact-orange-text' >आम्हाला कळवा</span>
        </div>
        <div className="form-container">
      <div className="form-row">
        <div className="form-group">
          <img src={name} />
          <input type="text" placeholder="पूर्ण नाव" />
        </div>
        <div className="form-group">
          <img src={add} />
          <input type="text" placeholder="पत्ता" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <img src={add} />
          <select>
            <option>तालुका</option>
            {/* <option>सातारा</option>
            <option>कराड</option> */}
          </select>
        </div>
        <div className="form-group">
          <img src={add} />
          <select>
            <option>जिल्हा</option>
            {/* <option>सातारा</option>
            <option>पुणे</option> */}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <img src={mail} />
          <input type="email" placeholder="ई - मेल" />
        </div>
        <div className="form-group">
          <img src={call} />
          <input type="text" placeholder="मोबाईल नंबर" />
        </div>
      </div>

      <div className="form-group full-width">
        <img src={msg} />
        <textarea placeholder="संदेश"></textarea>
      </div>
      </div>
       <div className='btn'>
        <button type="submit">अभिप्राय पाठवा</button>
        </div>
        </form>
        <div className='map-back'>
<div className='map-heading'>
  <span className='map-heading-grey'>"गाव जिथे शब्द रुजतात –</span>
  <span className='map-heading-orange'> माझं कवितांचं गाव जकातवाडी </span>
</div>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30414.406656018982!2d73.9758147656339!3d17.659589679554337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23a2ab34c4287%3A0xfe9c3eeb793417e0!2sJakatwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745958694154!5m2!1sen!2sin" title="Google Map"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
</div>
<div className='note-main'>
      <div className="note-section">
      <span className='note-black-text'>सभासद</span>
      <span className='note-orange-text'> नोंदणी</span>
</div>
        <ul>
          <li className='note-list'>नोंदणी करा आणि या कवितेच्या प्रवाहात सामील व्हा!</li>
        </ul>
        <div className='note-sep>'>
        <div className='note-step'>
          <li ><span className='note-step-black'>स्टेप १.</span>
          <span className='note-step-grey'>अँप डाउनलोड करा</span></li>
          <li > <span className='note-step-black'>स्टेप २.</span> 
          <span className='note-step-grey'> नवीन सदस्य म्हणून नोंदणी करा</span></li>
          <li > <span className='note-step-black'>स्टेप ३. </span>
          <span className='note-step-grey'>एकदा सदस्य झाल्यावर, कविता वाचा आणि लिहा!</span></li>
          <li ><span className='note-step-black'>स्टेप ४.</span>
          <span className='note-step-grey'>आपली साहित्यिक ओळख निर्माण करा</span></li>
          <li > <span className='note-step-black'>स्टेप ५.</span>
          <span className='note-step-grey'>काव्यस्पर्धा,कवी संमेलन, कार्यशाळा  आणि विशेष कार्यक्रमात सहभागी व्हा</span></li>
        </div>
      <div className='orange'>
        <h3 >"कवितांचं गाव, आता तुमच्या मोबाईलमध्ये!"</h3>
        </div>
        <img className='note-img' src={note} />
      
      </div>
</div>
    </div>
  );
};

export default contactus;