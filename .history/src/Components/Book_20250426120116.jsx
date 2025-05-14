import React, { useEffect, useState } from 'react';
import './CSS/Book.css';

const BookComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesData, setPagesData] = useState([
    { content: "Open Me, please!", isLeft: false },
    { content: "", isLeft: true },
    { content: "Hello there!", isLeft: false },
    { content: "", isLeft: true },
    { content: "Page 5 content", isLeft: false },
    { content: "", isLeft: true },
    { content: "Page 7 content", isLeft: false },
    { content: "", isLeft: true },
    // Add more pages as needed
  ]);

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
          setCurrentPage(Math.floor((this.pageNum - 2) / 2));
        } else {
          this.classList.add('book-page-flipped');
          this.nextElementSibling.classList.add('book-page-flipped');
          setCurrentPage(Math.floor(this.pageNum / 2));
        }
      };
    }
  }, [pagesData]);

  const flipNext = () => {
    if (currentPage < Math.floor(pagesData.length / 2)) {
      const oddPageIndex = currentPage * 2;
      const evenPageIndex = oddPageIndex + 1;
      
      const oddPage = document.querySelectorAll('.book-page')[oddPageIndex];
      const evenPage = document.querySelectorAll('.book-page')[evenPageIndex];
      
      if (oddPage && evenPage) {
        oddPage.classList.add('book-page-flipped');
        evenPage.classList.add('book-page-flipped');
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const flipPrev = () => {
    if (currentPage > 0) {
      const oddPageIndex = (currentPage * 2) - 1;
      const evenPageIndex = oddPageIndex - 1;
      
      const oddPage = document.querySelectorAll('.book-page')[oddPageIndex];
      const evenPage = document.querySelectorAll('.book-page')[evenPageIndex];
      
      if (oddPage && evenPage) {
        oddPage.classList.remove('book-page-flipped');
        evenPage.classList.remove('book-page-flipped');
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const addNewPage = () => {
    setPagesData([...pagesData, 
      { content: `New Page ${pagesData.length + 1} content`, isLeft: false },
      { content: "", isLeft: true }
    ]);
  };

  const updatePageContent = (index, content) => {
    const newPagesData = [...pagesData];
    newPagesData[index].content = content;
    setPagesData(newPagesData);
  };

  return (
    <div className="book-app">
      <div className="book-controls">
        <button onClick={flipPrev} className="nav-arrow left-arrow">←</button>
        <button onClick={flipNext} className="nav-arrow right-arrow">→</button>
        <button onClick={addNewPage} className="add-page-btn">Add Page</button>
      </div>

      <div className="page-editor">
        {pagesData.map((page, index) => (
          page.content && !page.isLeft && (
            <div key={index} className="editor-item">
              <h4>Page {(index / 2) + 1}</h4>
              <textarea
                value={page.content}
                onChange={(e) => updatePageContent(index, e.target.value)}
              />
            </div>
          )
        ))}
      </div>

      <div className="book-container">
        <link href="https://fonts.googleapis.com/css?family=Lovers+Quarrel" rel="stylesheet" />
        <div className="book-main">
          <div className="book-pages-wrapper">
            {pagesData.map((page, index) => (
              <div key={index} className="book-page">
                {page.content && <p>{page.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;