import React, { useEffect } from 'react';
import '.CSSBook.css';

const BookComponent = () => {
  useEffect(() => {
    const pages = document.getElementsByClassName('book-page');
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
      }
    }

    for (let i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      pages[i].onclick = function() {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('book-page-flipped');
          this.previousElementSibling.classList.remove('book-page-flipped');
        } else {
          this.classList.add('book-page-flipped');
          this.nextElementSibling.classList.add('book-page-flipped');
        }
      };
    }
  }, []);

  return (
    <div className="book-container">
      <link href="https://fonts.googleapis.com/css?family=Lovers+Quarrel" rel="stylesheet" />
      <div className="book-main">
        <div className="book-pages-wrapper">
          <div className="book-page"><p>Open Me, <br />please!</p></div>
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
        </div>
      </div>
    </div>
  );
};

export default BookComponent;