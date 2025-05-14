import React, { useState } from 'react';

import Category from './Category.jsx';
import Hero from './Hero-Section.jsx';

import Prastavit from './Prastavit.jsx';
import Object from './Object.jsx';
import MajaGav from './MajaGav.jsx';
import Pratisad from './Pratisad.jsx';
import Purva from './Purva.jsx';
import Que from './Answer.jsx';

// import BookFlip from './Book.jsx';


const Home= () => {

  const [activePopupId, setActivePopupId] = useState(null);

  const handleOpenPopup = (eventId) => {
    setActivePopupId(eventId);
  };

  const handleClosePopup = () => {
    setActivePopupId(null);
  };

  return (
  

    <React.Fragment>
  
    <Hero/>
    <Prastavit/>
    <Category/>
    <Object/>
    <MajaGav/>
    <Pratisad/>
    <Purva/>
   <Que/>
  
    

   </React.Fragment>
  );
}

export default Home;
