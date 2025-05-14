import React from 'react';
import '../CSS/KaryaSangra.css'
import img1 from '../Images/k1.png';
import img2 from '../Images/k2.png';
import img3 from '../Images/k3.png';

const  KaryaSanghra = () => {

return (

  <div className='karyaSangra-Container'>
<h2 className='KaryaSangra-heading'><span>मुख्य</span>कार्यसंघ</h2>


<div className='img-Container'>
  <img src={img1} className='img-box'></img>
  <img src={img2} className='img-box'></img>
  <img src={img3} className='img-box'></img>
  <img src={img3} className='img-box'></img>
  
</div>


  </div>




)





}

export default KaryaSanghra;