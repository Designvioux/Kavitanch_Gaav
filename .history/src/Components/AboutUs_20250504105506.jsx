import React from 'react';
import './CSS/AboutUs.css'
import HeroSection from './PageComponents/About/HeroSection';
import AboutInfo from './PageComponents/About/AboutInfo';
import Prawas from './PageComponents/About/Prawas';
import Udistay from './PageComponents/About/Udishtay';
import Niyojit from './PageComponents/About/Niyojit';
import Mandali from './PageComponents/About/KaryaKari';
import KaryaSanghra from './PageComponents/About/Karyasanghra';


 
const AboutUs = () =>{




return (

  <div className='AboutUs-Container'>
 <HeroSection/>
 <AboutInfo/>  
<Prawas/>
<Udistay/>
<Niyojit/>
<Mandali/>
{/* <KaryaSanghra/> */}




  </div>






)



}



export default AboutUs;