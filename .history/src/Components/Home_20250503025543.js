import React, { useState } from 'react';

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

// import BookFlip from './Book.jsx';


const Home= () => {

  const [activePopupId, setActivePopupId] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


  const handleOpenPopup = (eventId) => {
    setActivePopupId(eventId);
  };

  const handleClosePopup = () => {
    setActivePopupId(null);
  };

  return (
  

    <React.Fragment>
  
    <Hero/>
    <Prastavit onOpenPopup={handleOpenPopup} />
    <Category/>
    <Object/>
    <MajaGav/>
    <Pratisad/>
    <Purva/>
   <Que/>
  
    {/* Conditionally render the popup */}
    {activePopupId === 1 && <ContactPop onClose={handleClosePopup} />}
      {/* You can add more conditionals for other modals */}
      {showSuccessPopup && <SuccessPopup  onClose={() => setShowSuccessPopup(false)} />}

   </React.Fragment>
  );
}

export default Home;
