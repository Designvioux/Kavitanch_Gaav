import React, { useState } from 'react';
import '../App.css';
import './CSS/Home.css';
import Category from './Category.jsx';
import Hero from './Hero-Section.jsx';

import Prastavit from './Prastavit.jsx';
import Object from './Object.jsx';
import MajaGav from './MajaGav.jsx';
import Pratisad from './Pratisad.jsx';
import Purva from './Purva.jsx';
import Que from './Answer.jsx';
import ContactPop from './PageComponents/ContactUs/KaviSamelanContactPop.jsx';
import SuccessPopup from './PageComponents/ContactUs/SuccesPopUp.jsx';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleOpenPopup = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
    setShowPopup(false);
  };

  return (
    <React.Fragment>
      <Hero />
      <Prastavit onOpenPopup={handleOpenPopup} />

      {showPopup && (
        <ContactPop
          onClose={handleClosePopup}
          setShowSuccessPopup={setShowSuccessPopup}
          selectedEvent={selectedEvent}
        />
      )}

      <Category />
      <Object />
      <MajaGav />
      <Pratisad />
      {/* <Purva /> */}
      <Que />

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}
    </React.Fragment>
  );
};

export default Home;
