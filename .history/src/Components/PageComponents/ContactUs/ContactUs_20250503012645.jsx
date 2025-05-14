import React from 'react';
import './CSS/ContactUs.css';
import img from './Images/library-with-books.png';
import name from './Images/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import add from './Images/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2.png';
import mail from './Images/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import call from './Images/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import msg from './Images/forum_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png';
import note from './Images/Note.png';

const ContactUs = () => {
  return (
    <div className="contactus-section">
      <img src={img} alt="Library" className="contactus-background-image" />
      <div className="contactus-overlay-text">
        <h1>संपर्क करा</h1>
      </div>

      <form className="contactus-form">
        <div className="contactus-form-title">
          <span className="contactus-black-text">आपला अभिप्राय </span>
          <span className="contactus-orange-text">आम्हाला कळवा</span>
        </div>

        <div className="contactus-form-container">
          <div className="contactus-form-row">
            <div className="contactus-form-group">
              <img src={name} />
              <input type="text" placeholder="पूर्ण नाव" />
            </div>
            <div className="contactus-form-group">
              <img src={add} />
              <input type="text" placeholder="पत्ता" />
            </div>
          </div>

          <div className="contactus-form-row">
            <div className="contactus-form-group">
              <img src={add} />
              <select>
                <option>तालुका</option>
              </select>
            </div>
            <div className="contactus-form-group">
              <img src={add} />
              <select>
                <option>जिल्हा</option>
              </select>
            </div>
          </div>

          <div className="contactus-form-row">
            <div className="contactus-form-group">
              <img src={mail} />
              <input type="email" placeholder="ई - मेल" />
            </div>
            <div className="contactus-form-group">
              <img src={call} />
              <input type="text" placeholder="मोबाईल नंबर" />
            </div>
          </div>

          <div className="contactus-form-group contactus-full-width">
            <img src={msg} />
            <textarea placeholder="संदेश"></textarea>
          </div>
        </div>

        <div className="contactus-submit-btn">
          <button type="submit">अभिप्राय पाठवा</button>
        </div>
      </form>

      <div className="contactus-map-section">
        <div className="contactus-map-heading">
          <span className="contactus-map-heading-grey">"गाव जिथे शब्द रुजतात –</span>
          <span className="contactus-map-heading-orange"> माझं कवितांचं गाव जकातवाडी </span>
        </div>
        <div className="contactus-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30414.406656018982!2d73.9758147656339!3d17.659589679554337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23a2ab34c4287%3A0xfe9c3eeb793417e0!2sJakatwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745958694154!5m2!1sen!2sin"
            title="Google Map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contactus-note-section">
        <div className="contactus-note-header">
          <span className="contactus-note-black-text">सभासद</span>
          <span className="contactus-note-orange-text"> नोंदणी</span>
        </div>
        <ul>
          <li className="contactus-note-list">नोंदणी करा आणि या कवितेच्या प्रवाहात सामील व्हा!</li>
        </ul>
        <div className="contactus-note-steps">
          <div className="contactus-note-step">
            <li><span className="contactus-step-black">स्टेप १.</span><span className="contactus-step-grey"> अँप डाउनलोड करा</span></li>
            <li><span className="contactus-step-black">स्टेप २.</span><span className="contactus-step-grey"> नवीन सदस्य म्हणून नोंदणी करा</span></li>
            <li><span className="contactus-step-black">स्टेप ३.</span><span className="contactus-step-grey"> एकदा सदस्य झाल्यावर, कविता वाचा आणि लिहा!</span></li>
            <li><span className="contactus-step-black">स्टेप ४.</span><span className="contactus-step-grey"> आपली साहित्यिक ओळख निर्माण करा</span></li>
            <li><span className="contactus-step-black">स्टेप ५.</span><span className="contactus-step-grey"> काव्यस्पर्धा, कवी संमेलन, कार्यशाळा आणि विशेष कार्यक्रमात सहभागी व्हा</span></li>
          </div>

          <div className="contactus-note-highlight">
            <h3>"कवितांचं गाव, आता तुमच्या मोबाईलमध्ये!"</h3>
    
          <img className="contactus-note-image" src={note} alt="Note" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
