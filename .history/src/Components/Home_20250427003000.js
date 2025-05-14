

import Category from './Category.jsx';
import Hero from './Hero-Section.jsx';
import React from 'react';
import Prastavit from './Prastavit.jsx';
import Object from './Object.jsx';
import MajaGav from './MajaGav.jsx';
import Pratisad from './Pratisad.jsx';
import Purva from './Purva.jsx';
import Que from './Answer.jsx';

import BookFlip from './Book.jsx';


const Home= () => {
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
