import React from "react";
import '../CSS/Kavita.css';
import Img1 from '../Images/Kavita/';
import Search from '../Components/Images/search.png';
import img2 from '../Components/Images/Kavita2.png';
import img3 from '../Components/Images/Kavita3.png';
import img4 from '../Components/Images/Kavita4.png';
import img5 from '../Components/Images/Kavita5.png';
import img6 from '../Components/Images/Kavita6.png';
import img7 from '../Components/Images/Kavita7.png';
import img8 from '../Components/Images/Kavita8.png';
import img9 from '../Components/Images/Kavita9.png';
import img10 from '../Components/Images/Kavita10.png';
import img11 from '../Components/Images/Kavita11.png';
import img12 from '../Components/Images/Kavita12.png';
import Star from '../Components/Images/Star.png';

const poems = [
  {
    id: 1,
    title: "कणा",
    author: "-कुसुमाग्रज",
    Image : Img1,
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
  return (
    <body>
    <div className="container">
    <div className="heading">
    <div>
      <span className="orange-heading">कविता</span>
      <span className="black-heading"> विभाग</span>
      </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Poems" />
        <button><img src={Search} /></button>
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
        {poems.map((poem , index) => (
          <div className="poem-card" key={index}>
            <img src={poem.Image} alt={poem.title}
            className="image" /> 
            <div class="poem-info">
            <h3>{poem.title}</h3>
            <p>{poem.author}</p>
           
            <img src={Star} alt="Star" className="star-icon" />
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default PoemGrid;