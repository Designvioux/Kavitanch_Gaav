import React, { useState } from 'react'; 
import '../Components/CSS/EBook.css';
import Search from './Images/search-icon.png';
import img1 from './Images/Ebook1.png';
import img2 from './Images/Ebook2.png';
import img3 from './Images/Ebook3.png';
import img4 from './Images/Ebook4.png';
import img5 from './Images/Ebook5.png';
import img6 from './Images/Ebook6.png';
import img7 from './Images/Ebook7.png';
import img8 from './Images/Ebook8.png';
import img9 from './Images/Ebook9.png';
import img10 from '../Components/Images/Ebook10.png';


const books = [
  { id:1,
    title: 'मराठी माती', 
    author: 'कुसुमाग्रज', 
    image: img1 
  },
  {id:2,
    title: 'बोलगाणी',
    author: 'मंगेश पाडगावकर',
    image: img2
  },
  {
    id:3,
    title: 'ती फुलराणी',
    author: 'पु.ल देशपांडे ',
    image: img3
  },
  {id:4,
    title: 'मारवा',
    author: 'कुसुमाग्रज',
    image: img4
  },
  {id:5,
    title: 'झंझावात',
    author: 'सुरेश भट',
    image: img5
  },
  {id:6,
    title: 'कैकयी',
    author: 'वि. वि शिरवाडकर',
    image: img6
  },
  {id:7,
    title: 'समिधा',
    author: 'रणजीत देसाई',
    image: img7
  },
  {id:8,
    title: 'ययाती',
    author: 'वि.स खांडेकर ',
    image: img8
  },
  {id:9,
    title: 'चंद्रभिलोर',
    author: 'एस.व्ही गोडस',
    image: img9
  },
  {id:10,
    title: 'चंद्रोत्सव',
    author: 'प्रवीण दवण',
    image: img10
  },
];


const ebookcategories = [
  'कविता संग्रह', 'बालकविता', 'भक्ती साहित्य', 'प्रेमकविता', 'सामाजिक कविता', 'निसर्गकविता', 'स्थानिक साहित्य', 'आत्मकथनात्मक साहित्य'
];


const EBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
  
    const handlePageClick = (page) => {
      setCurrentPage(page);
    };
  return (
    <div className="ebook-container">
      <div className='small-letter'>
        <span className='home'>Home /</span>
        <span className='marathi'> ई -पुस्तके</span>
      </div>

      <div className='ebook-heading'>
        <span className='orange-ebook-heading'>ई </span>
        <span className='black-ebook-heading'>-पुस्तके</span>
      </div>

      <div className="ebook-search-bar">
        <input type="text" placeholder="Search Poems" />
        <button><img src={Search} alt="search" /></button>
      </div>

      <div className='ebook-text'>
        <p>Choose Category</p>
      </div>

      <div className="ebook-categories">
        {ebookcategories.map((cat, index) => (
          <button key={index} className="ebook-category-btn">{cat}</button>
        ))}
      </div>

      <div className='ebook-main'>
        <span className='ebook-k'>क</span>
        <span className='ebook-vita'>विता संग्रह</span>
        <span className='ebook-grey'> जकातवाडीच्या कविंचे साहित्य, आता तुमच्या मोबाईलवर!</span>
      </div>
      <div className='j-name'><h2>ज</h2></div>

   
    <div className="ebook-grid-container">
      {books.map((book, index) => (
        <div className="ebook-card" key={index}>
          <img src={book.image} alt={book.title} className="ebook-card-image" />
          <div className="ebook-card-content">
            <h3 className="ebook-title">{book.title}</h3>
            <p className="ebook-author"><span className='ebook-author-title'>कवीचे नाव :</span><span>{book.author}</span></p>
            <div className='common-text'><p>भावनांचा विद्रोही आवाज</p></div>
            <div className="ebook-buttons">
              <button className="ebook-read-button">वाचा</button>
              <button className="ebook-download-button">डाउनलोड</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination">
        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
         <div className='prev-btn'>Prev</div>
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        <span className="pagination-dots">...</span>

        <button
          className={`pagination-button ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>

        <button
          className="pagination-button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        >
         <div className="next-btn"> Next</div>
        </button>
      </div>
      </div>
  );
};
export default EBooks;
