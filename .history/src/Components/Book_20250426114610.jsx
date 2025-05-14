import React, { useState } from 'react';
import './CSS/Book.css';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 32;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="book-container">
      <div className="book">
        <div id="pages" className="pages">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`page ${index < currentPage ? 'flipped' : ''}`}
            >
              <p>{index === 0 ? 'Open Me, please!' : index === 2 ? 'Hello there!' : ''}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>⟵ Previous</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next ⟶</button>
      </div>
    </div>
  );
};

export default Book;
