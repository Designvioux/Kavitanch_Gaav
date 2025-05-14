import React from 'react';
import '../Components/CSS/DiwaliAnk.css';
import Search from './Images/search.png';
import img1 from './Images/Diwali1.png'
import img2 from './Images/Diwali2.png'
import img3 from '../Components/Images/Diwali3.png'
import img4 from '../Components/Images/Diwali4.png'
import img5 from '../Components/Images/Diwali5.png'
import img6 from '../Components/Images/Diwali6.png'
import img7 from '../Components/Images/Diwali7.png'
import img8 from '../Components/Images/Diwali8.png'
import img9 from '../Components/Images/Diwali9.png'
import img10 from '../Components/Images/Diwali10.png'


const diwali = [
  { id:1,
    title: 'नाबाद शंभर - २०१५', 
     image: img1
  },
  {id:2,
    title: 'चपराक - २०१६',
      image: img2
  },
  {
    id:3,
    title: 'सुगंध सरिता - २०१७',
   image: img3
  },
  {id:4,
    title: 'शब्दालय - २०१८',
     image: img4
  },
  {id:5,
    title: 'पुष्यभूषण - २०१९',
      image: img5
  },
  {id:6,
    title: 'मुक्त शब्द - २०२०',
     image: img6
  },
  {id:7,
    title: 'आराध्य - २०२१',
     image: img7
  },
  {id:8,
    title: 'दीपावली - २०२२',
   image: img8
  },
  {id:9,
    title: 'निनाद - २०२३',
     image: img9
  },
  {id:10,
    title: 'आश्लेषा - २०२४',
      image: img10 
  },
];

const DiwaliAnk = () => {
  return (
    <div className="diwali-container">
      <div className='diwali-small-letter'>
        <span className='home'>Home /</span>
        <span className='marathi'> दिवाळी अंक</span>
      </div>
      <div className='diwali-heading'>
        <span className='orange-diwali-heading'>दिवाळी </span>
        <span className='black-diwali-heading'> अंक</span>
      </div>
      <div className="diwali-search-bar">
        <input type="text" placeholder="शोधा" />
         <button><img src={Search} alt="search" /></button> 
      </div>

      <div className='diwali-main'>
        <span className='diwali-m'>दिवाळी</span>
        <span className='diwali-sik'> -अंक</span>
        <span className='diwali-grey'>  "दिवाळीच्या तेजात, शब्दांचा प्रकाश!"</span>
      </div>
    <div className="diwali-grid-container">
      {diwali.map((book, index) => (
        <div className="diwali-card" key={index}>
          <img src={book.image} alt={book.title} className="diwali-card-image" />
          <div className="diwali-card-content">
            <h3 className="diwali-title">{book.title}</h3>
            <div className="diwali-buttons">
              <button className="diwali-read-button">वाचा</button>
              <button className="diwali-download-button">डाउनलोड</button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};
export default DiwaliAnk;
