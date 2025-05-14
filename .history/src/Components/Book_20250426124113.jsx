import React, { useEffect, useRef, useState } from 'react';
import './CSS/Book.css';

const Book = () => {
  const pagesRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesContent] = useState([
    {
      title: "भारतातील पहिलं",
      subtitle: "माझं कवितांचं गांव",
      footer: "जकातवाडी राजधानी सातारा"
    },
    {
      title: "कणा",
      content: "ओळखलंत का सर मला? पावसात आला कोणी
"कपडे होते कर्दमलेले केसांवरती पाणी"
"क्षणभर बसला, नंतर हसला, बोलाला वरती पाहून",
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
पाठीवरती हात ठेवून नुसते लढ म्हणा."
    },
    {
      title: "तिसरी कविता",
      content: "येथे तुमची तिसरी कविता लिहा..."
    },
    // Add more pages content as needed
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]);

  useEffect(() => {
    const pages = document.getElementsByClassName('book-page');
    pagesRef.current = pages;
    
    // Initialize z-index for pages
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i;
      }
    }

    // Flip pages to current position
    updatePageFlip();
  }, [currentPage]);

  const updatePageFlip = () => {
    const pages = pagesRef.current;
    for (let i = 0; i < pages.length; i++) {
      if (i < currentPage * 2) {
        if (i % 2 === 0) {
          pages[i].classList.add('book-page-flipped');
          if (pages[i + 1]) {
            pages[i + 1].classList.add('book-page-flipped');
          }
        }
      } else {
        if (i % 2 === 0) {
          pages[i].classList.remove('book-page-flipped');
          if (pages[i + 1]) {
            pages[i + 1].classList.remove('book-page-flipped');
          }
        }
      }
    }
  };

  const flipNext = () => {
    if (currentPage < Math.floor(pagesRef.current.length / 2)) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const flipPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const renderPageContent = (pageIndex) => {
    const content = pagesContent[pageIndex];
    if (!content || Object.keys(content).length === 0) return null;
    
    return (
      <div className="page-content">
        {content.title && <h2>{content.title}</h2>}
        {content.subtitle && <h3>{content.subtitle}</h3>}
        {content.content && (
          <div className="poem-content">
            {content.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
        {content.footer && <h4 className="page-footer">{content.footer}</h4>}
      </div>
    );
  };

  return (
    <div className="book-container">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Shrikhand&display=swap" rel="stylesheet" />
      
      <button className="book-nav book-nav-left" onClick={flipPrev}>
        &larr;
      </button>
      
      <div className="book-main">
        <div className="book-pages-wrapper">
          {pagesContent.map((_, index) => (
            <div 
              key={index} 
              className="book-page"
              onClick={() => {
                if (index % 2 === 0 && index / 2 === currentPage) {
                  flipNext();
                } else if (index % 2 === 1 && (index - 1) / 2 === currentPage - 1) {
                  flipPrev();
                }
              }}
            >
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

export default Book;