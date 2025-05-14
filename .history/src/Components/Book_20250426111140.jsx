// Book.jsx
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import './CSS/Book.css'

const Book = () => {
  const book = useRef();

  const nextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">प्रेम</h1>
      <p className="text-xl mb-6 font-serif">"प्रेम जेव्हा शब्दात उतरते, तेव्हा कविता होते"</p>

      <div className="relative">
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={book}
          className="shadow-2xl rounded-lg"
        >
          {/* Cover Page */}
          <div className="bg-red-600 flex items-center justify-center text-white font-bold text-2xl p-10">
            भारतातील पहिलं <br /> माझं कवितांचं गव्ह <br /> जखतवाडी, राजधानी सातारा
          </div>

          {/* Inside Pages */}
          <div className="bg-white p-10 font-serif leading-relaxed">
            <h2 className="text-3xl mb-4">करणा</h2>
            <p>अनेकांनी मला का लिहितं विचारलं त्याचं उत्तर ह्या कविता आहेत.</p>
            <br />
            <p>करणा म्हणतो, प्रेम, दोस्ती, माया, हळुवारपणा ह्यांचं "माझं" गाणं म्हणजे कविता.</p>
            <br />
            <p>प्रेमवेड्या व्यक्तींचं एक गुप्त संमेलन म्हणजे कविता.</p>
            <br />
            <p>मनाच्या भुयारातून वाहणाऱ्या आठवणी म्हणजे कविता.</p>
            <br />
            <p>... आणखी बरंच काही!</p>
          </div>

          {/* More pages if needed */}
          <div className="bg-white p-10">
            <h2 className="text-2xl font-bold mb-2">More Poems</h2>
            <p>Here you can add more poems or content...</p>
          </div>

          {/* Last Page */}
          <div className="bg-red-600 flex items-center justify-center text-white font-bold text-2xl p-10">
            धन्यवाद ❤️
          </div>
        </HTMLFlipBook>

        {/* Navigation Buttons */}
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevPage}
            className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg"
          >
            &lt;
          </button>
        </div>

        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextPage}
            className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
