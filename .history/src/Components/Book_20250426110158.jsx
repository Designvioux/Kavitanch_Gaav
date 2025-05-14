// BookFlip.jsx
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const BookFlip = () => {
  const bookRef = useRef();

  const nextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative">
        <HTMLFlipBook
          width={400}
          height={500}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1536}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={bookRef}
          className="shadow-2xl rounded-md overflow-hidden"
        >
          {/* Cover Page */}
          <div className="flex items-center justify-center bg-orange-100 text-4xl font-bold text-red-700">
            प्रेम
          </div>

          {/* Red Page - Left Side */}
          <div className="flex flex-col justify-center items-center bg-red-600 text-white font-bold text-center p-6">
            <h2 className="text-lg mb-2">भारतातील पहिलं</h2>
            <h1 className="text-2xl mb-2">माझं कवितांचं गाव</h1>
            <h2 className="text-lg">जखतवाडी, राजधानी सातारा</h2>
          </div>

          {/* White Page - Right Side */}
          <div className="flex flex-col bg-white text-black p-8 leading-relaxed font-serif">
            <h1 className="text-3xl font-bold mb-4 text-center">कणा</h1>
            <p>अंधारातून वाट काढत चालणाऱ्या माणसाचे ह्या कविता आहेत. </p>
            <p className="mt-2">क्षणांच्या हिशोबात जरी मोजल्या जातात तरी "कणा" म्हणजेच माणूस आहे.</p>
            <p className="mt-2">माणूसपणाचे परीक्षण करणारी ही कविता आहे.</p>
            <p className="mt-2">ही कविता त्याच्या अस्तित्वाचा मूलगामी प्रश्न विचारते.</p>
            <p className="mt-2">ही कविता तिरकस आहे, परंतु जीवनाचा नेमका वेध घेते.</p>
            <p className="mt-2 text-right">- सुरेश भट</p>
          </div>

          {/* More pages if needed */}
        </HTMLFlipBook>

        {/* Navigation Buttons */}
        <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevPage}
            className="bg-pink-100 hover:bg-pink-300 text-black font-bold p-3 rounded-full shadow"
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextPage}
            className="bg-pink-100 hover:bg-pink-300 text-black font-bold p-3 rounded-full shadow"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFlip;
