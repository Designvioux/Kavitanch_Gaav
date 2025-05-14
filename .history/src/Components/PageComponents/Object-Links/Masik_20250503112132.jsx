import React, { useState } from 'react'; 
import './CSS/Masik.css';
import Search from './Images/search.png';
import img from './Images/Masik.png';

const masik = [
  { id: 1, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 2, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 3, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 4, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 5, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 6, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 7, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 8, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 9, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
  { id: 10, title: 'मनशक्ती', author: 'जागा आणि जगू द्या', image: img },
];

const Masik = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="masik-container">
      <div className="masik-small-letter">
        <span className="masik-home">Home /</span>
        <span className="masik-marathi"> मासिक</span>
      </div>

      <div className="masik-heading">
        <h1>मासिक</h1>
      </div>

      <div className="masik-search-bar">
        <input type="text" placeholder="Search Masik" />
        <button><img src={Search} alt="search" /></button>
      </div>

      <div className="masik-main">
        <span className="masik-m">मा</span>
        <span className="masik-sik">सिक</span>
        <span className="masik-grey"> प्रत्येक महिन्यात कवितांचा नवा श्वास!</span>
      </div>

      <div className="masik-grid-container">
        {masik.map((book, index) => (
          <div className="masik-card" key={index}>
            <img src={book.image} alt={book.title} className="masik-card-image" />
            <div className="masik-card-content">
              <h3 className="masik-title">{book.title}</h3>
              <p className="masik-author">{book.author}</p>
              <div className="masik-buttons">
                <button className="masik-read-button">वाचा</button>
                <button className="masik-download-button">डाउनलोड</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="masik-pagination">
        <button
          className="masik-pagination-button"
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
         <div className='masik-prev-btn'>Prev</div>
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`masik-pagination-button ${currentPage === page ? 'masik-pagination-button-active' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        <span className="masik-pagination-dots">...</span>

        <button
          className={`masik-pagination-button ${currentPage === totalPages ? 'masik-pagination-button-active' : ''}`}
          onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </button>

        <button
          className="masik-pagination-button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}>
         <div className="masik-next-btn"> Next</div>
        </button>
      </div>
    </div>
  );
};

export default Masik;