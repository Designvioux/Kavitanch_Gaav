import React, { useState } from 'react';
import './CSS/Book.css';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2; // Only two pages based on your image

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
          {/* Page 1 */}
          <div className={`page ${currentPage > 0 ? 'flipped' : ''}`}>
            <div className="page-content left-page">
              <h3>भारतातील पहिलं</h3>
              <h2>माझं कवितांचं गाव</h2>
              <h3>जखवतवाडी, राजधानी सातारा</h3>
            </div>
          </div>

          {/* Page 2 */}
          <div className={`page ${currentPage > 1 ? 'flipped' : ''}`}>
            <div className="page-content right-page">
              <h1>कणा</h1>
              <p>
                अडचणींच्या काळात त्या त्या शब्दाच्या अर्थाने आपल्या माणसांची ओळख पटते.<br />
                त्यासाठी कविता.<br /><br />
                झाडाच्या फांद्या, झुडुपं, गवत यांच्या नाजूक ‘कण्या’सारखी<br />
                माणसांची माणुसकीसुद्धा.<br /><br />
                परिस्थितीच्या परीक्षेत ताठ उभं राहतं तेव्हा <b>‘कणा’</b> म्हणतात त्याला!<br /><br />
                मराठवाडा, विदर्भ, पश्चिम महाराष्ट्र, कोकण, खान्देश, नाशिक, पुणे, मुंबई <br />
                अशा सगळ्या भागातून आलेल्या ‘आरसीएस’च्या मित्रांमध्ये<br />
                हा कणा ठळक दिसतो.<br /><br />
                तो कविता आणि कवितांच्या गावाचा आत्मा आहे.<br /><br />
                माझं कवितांचं गावाचं, कविता आणि माणसं यांचं हे पुस्तक<br />
                हाच कणा दाखवणारं आहे.<br /><br />
                - मुकुंद शिंदे
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>⟵ मागे</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>पुढे ⟶</button>
      </div>
    </div>
  );
};

export default Book;
