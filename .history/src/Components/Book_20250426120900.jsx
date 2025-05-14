import React, { useEffect, useRef } from 'react';
import './CSS/Book.css';

const BookComponent = () => {
  const pagesRef = useRef([]);

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

  return (
    <div className="book-container">
      <link href="https://fonts.googleapis.com/css?family=Lovers+Quarrel" rel="stylesheet" />
      <button className="book-nav book-nav-left" onClick={flipPrev}>
        &larr;
      </button>
      <div className="book-main">
        <div className="book-pages-wrapper">
          <div className="book-page"><h3>भारतातील पहिलं</h3>please!<h2>माझं कवितांचं गांव</h2> <h6></div>
          <div className="book-page"></div>
          <div className="book-page"><p>Hello there!</p></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
          <div className="book-page"></div>
        </div>
      </div>
      <button className="book-nav book-nav-right" onClick={flipNext}>
        &rarr;
      </button>
    </div>
  );
};

export default BookComponent;