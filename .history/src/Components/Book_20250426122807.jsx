import React, { useEffect, useRef, useState } from 'react';
import './CSS/Book.css';

const BookComponent = () => {
  const pagesRef = useRef([]);
  const [pagesContent] = useState([
    {
      title: "भारतातील पहिलं",
      subtitle: "माझं कवितांचं गांव",
      footer: "जकातवाडी राजधानी सातारा"
    },
    {
      title: "कणा",
      content: `ओळखलंत का सर मला?" पावसात आला कोणी,
कपडे होते कर्दमलेले केसांवरती पाणी,
क्षणभर बसला, नंतर हसला, बोलाला वरती पाहून,
गंगामाई आली पाहुणी, गेली घरट्यात राहून,
माहेरवाशीण पोरीसारखी चार भिंतीत नाचली,
मोकळ्या हाती जाईल कशी बायको मात्र वाचली,
भिंत खचली, चूल विझली, होते नव्हते गेले,
प्रसाद म्हणून पापण्यांमध्ये पाणी तेवढे ठेवले,
कारभारणीला घेऊन संगे सर आता लढतो आहे,
पडकी भिंत बांधतो आहे, चिखल गाळ काढतो आहे,
खिशाकडे हात जाताच हसत हसत उठला,
पैसे नको सर, जरा एकटेपणा वाटला,
मोडून पडला संसार तरी मोडला नाही कणा,
पाठीवरती हात ठेवून नुसते लढ म्हणा.`
    },
    {
      title: "Page 3 Title",
      content: "Page 3 content goes here..."
    },
    // Add more pages content as needed
    // Empty objects will render blank pages
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]);

  useEffect(() => {
    const pages = document.getElementsByClassName('book-page');
    pagesRef.current = pages;
    
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
      }
    }

    for (let i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      pages[i].onclick = function() {
        flipPage(this);
      };
    }
  }, []);

  const flipPage = (page) => {
    if (page.pageNum % 2 === 0) {
      page.classList.remove('book-page-flipped');
      page.previousElementSibling?.classList.remove('book-page-flipped');
    } else {
      page.classList.add('book-page-flipped');
      page.nextElementSibling?.classList.add('book-page-flipped');
    }
  };

  const flipNext = () => {
    const pages = pagesRef.current;
    for (let i = 0; i < pages.length - 1; i++) {
      if (!pages[i].classList.contains('book-page-flipped')) {
        flipPage(pages[i]);
        return;
      }
    }
  };

  const flipPrev = () => {
    const pages = pagesRef.current;
    for (let i = pages.length - 1; i >= 0; i--) {
      if (pages[i].classList.contains('book-page-flipped')) {
        flipPage(pages[i]);
        return;
      }
    }
  };

  const renderPageContent = (pageIndex) => {
    const content = pagesContent[pageIndex];
    if (!content) return null;
    
    return (
      
      <div className="page-content">
        
        {content.title && <h2>{content.title}</h2>}
        {content.subtitle && <h3>{content.subtitle}</h3>}
        {content.content && <p style={{whiteSpace: "pre-line"}}>{content.content}</p>}
        {content.footer && <h4>{content.footer}</h4>}
      </div>
    );
  };

  return (
    <div className="book-container">
      <link href="https://fonts.googleapis.com/css?family=Lovers+Quarrel" rel="stylesheet" />
      
      <button className="book-nav book-nav-left" onClick={flipPrev}>
        &larr;
      </button>
      <div className="book-main">
        <div className="book-pages-wrapper">
          {pagesContent.map((_, index) => (
            <div key={index} className="book-page">
              {renderPageContent(index)}
            </div>
          ))}
        </div>
      </div>
      <button className="book-nav book-nav-right" onClick={flipNext}>
        &rarr;
      </button>
    </div>
  );
};

export default BookComponent;