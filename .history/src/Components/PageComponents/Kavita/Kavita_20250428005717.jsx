import React from "react";
import { useState } from 'react';

import '../CSS/Kavita.css';
import { Link } from "react-router-dom";
import Img1 from '../Images/Kavita/Kavita1.png';
import Search from '../Images/search-icon.png';
import img2 from '../Images/Kavita//Kavita2.png';
import img3 from '../Images/Kavita//Kavita3.png';
import img4 from '../Images/Kavita//Kavita4.png';
import img5 from '../Images/Kavita//Kavita5.png';
import img6 from '../Images/Kavita//Kavita6.png';
import img7 from '../Images/Kavita//Kavita7.png';
import img8 from '../Images/Kavita//Kavita8.png';
import img9 from '../Images/Kavita//Kavita9.png';
import img10 from '../Images/Kavita//Kavita10.png';
import img11 from '../Images/Kavita//Kavita11.png';
import img12 from '../Images/Kavita//Kavita12.png';
import Star from '../Images/Kavita//Star.png';


const poems = [
  {
    id: 1,
    title: "कणा",
    author: "-कुसुमाग्रज",
    Image : Img1,
     path: "/book"
  },
  {
    id: 2,
    title: "तुझे माझे जगण",
    author: "-कुसुमाग्रज",
    Image : img2,
    },
    {
      id: 3,
      title: "गंध",
      author: "-कोमल पवार",
      Image : img3,
      },
      {
        id: 4,
        title: "वाट",
        author: "-व. पु. काळे",
        Image : img4,
        },
        {
          id: 5,
          title: "प्रेम- एक ओढ",
          author: "-राजेश्री साळुंखे",
          Image : img5,
          },
          {
            id: 6,
            title: "सोबत",
            author: "-राकेश शिंदे",
            Image : img6,
            },
            {
              id: 7,
              title: "असेन मी",
              author: "-शांता शेळखे",
              Image : img7,
              },
              {
                id: 8,
                title: "आयुष्य",
                author: "-प्रकाश पवार",
                Image : img8,
                },
                {
                  id: 9,
                  title: "श्रावणसरी",
                  author: "-कुसुमाग्रज",
                  Image : img9,
                  },
                  {
                    id: 10,
                    title: "हिरवा ऋतू",
                    author: "-अनिकेत पाटील",
                    Image : img10,
                    },
                    {
                      id: 11,
                      title: "सांज",
                      author: "-प्रकाश पवार",
                      Image : img11,
                      },
                      {
                        id: 12,
                        title: "इंद्रधनुष्य",
                        author: "-नीलम कदम",
                        Image : img12,
                        },
                        {
                          id: 13,
                          title: "कणा",
                          author: "-कुसुमाग्रज",
                          Image : Img1,
                        },
                        {
                          id: 14,
                          title: "तुझे माझे जगण",
                          author: "-कुसुमाग्रज",
                          Image : img2,
                          },
                          {
                            id: 15,
                            title: "गंध",
                            author: "-कोमल पवार",
                            Image : img3,
                            },
                            {
                              id: 16,
                              title: "वाट",
                              author: "-व. पु. काळे",
                              Image : img4,
                              },
];

const categories = [
  "प्रेम कविता", "निसर्ग कविता", "बाल कविता", "हास्य कविता", "सामाजिक कविता", "भक्ती कविता "
];




const PoemGrid = () => {

  const [searchText, setSearchText] = useState('');



  return (
    <body>
    <div className="Kavita-container">
    <div className="Kavita-heading">
  
      <span className="orange-heading">कविता</span>
      <span className="black-heading"> विभाग</span>
   
      </div>

      <div className='search-sec'>
        <div className='search-bar'>
          <input 
            type="text" 
            className='search-type' 
            placeholder='Search Poems' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          /> 
      <div className='search-icon'>
                            <img src={Search} alt="Search Icon" />
                        </div>
        </div>
      </div>
     
      <div className="text">
        <p>Choose Category</p>
      </div>
      <div className="categories">
        {categories.map((cat, index) => (
          <button key={index} className="category-btn">{cat}</button>
        ))}
      </div>
      <div className="pre-main">
        <span className="pre">प्रे</span>
        <span className="ma">म</span>
        <span className="pre-ma"> "प्रेम जेव्हा शब्दात उतरते, तेव्हा कविता होते"</span>
      </div>
      <div className="poem-grid">
      {poems.map((poem, index) => (
  <Link to={poem.path} key={index} className="poem-link">
    <div className="poem-card">
      <img src={poem.Image} alt={poem.title} className="image" /> 
      <div className="poem-info">
        <h3>{poem.title}</h3>
        <p>{poem.author}</p>
        <img src={Star} alt="Star" className="star-icon" />
      </div>
    </div>
  </Link>
        ))}
      </div>
    </div>
    </body>
  );
};

export default PoemGrid;