// import React, { useEffect, useRef, useState } from 'react';
// import './CSS/Book.css';

// const Book = () => {
//   const pagesRef = useRef([]);
//   const [currentPage, setCurrentPage] = useState(0);


// const [pagesContent] = useState([
//   {
//     title: "भारतातील पहिलं",
//     subtitle: "माझं कवितांचं गांव",
//     footer: "जकातवाडी राजधानी सातारा"
//   },
//   {}, // Blank left page facing "कणा"
//   {
//     title: "कणा",
//     content: `ओळखलंत का सर मला?" पावसात आला कोणी,
// कपडे होते कर्दमलेले केसांवरती पाणी,
//  क्षणभर बसला, नंतर हसला, बोलाला वरती पाहून,
// गंगामाई आली पाहुणी, गेली घरट्यात राहून,
// माहेरवाशीण पोरीसारखी चार भिंतीत नाचली,
// मोकळ्या हाती जाईल कशी बायको मात्र वाचली,
// भिंत खचली, चूल विझली, होते नव्हते गेले,
// प्रसाद म्हणून पापण्यांमध्ये पाणी तेवढे ठेवले,
// कारभारणीला घेऊन संगे सर आता लढतो आहे,
// पडकी भिंत बांधतो आहे, चिखल गाळ काढतो आहे,
// खिशाकडे हात जाताच हसत हसत उठला,
// पैसे नको सर, जरा एकटेपणा वाटला,
// मोडून पडला संसार तरी मोडला नाही कणा,
// पाठीवरती हात ठेवून नुसते लढ म्हणा.`
//   },
//   {
    
//   }, // Blank right page after "कणा"
//   {
//     title: "तिसरी कविता",
//     content: "Kavita dusari"
//   },
//   {}, {}, {}, {}, {}, {}, {}, {}, // more blank pages
// ]);


//   useEffect(() => {
//     const pages = document.getElementsByClassName('book-page');
//     pagesRef.current = pages;
    
//     // Initialize z-index for pages
//     for (let i = 0; i < pages.length; i++) {
//       const page = pages[i];
//       page.style.zIndex = pages.length - i;
//     }

//     // Flip pages to current position
//     updatePageFlip();
//   }, [currentPage]);

//   const updatePageFlip = () => {
//     const pages = pagesRef.current;
//     for (let i = 0; i < pages.length; i++) {
//       if (i < currentPage * 2) {
//         if (i % 2 === 0) {
//           pages[i].classList.add('book-page-flipped');
//           if (pages[i + 1]) {
//             pages[i + 1].classList.add('book-page-flipped');
//           }
//         }
//       } else {
//         if (i % 2 === 0) {
//           pages[i].classList.remove('book-page-flipped');
//           if (pages[i + 1]) {
//             pages[i + 1].classList.remove('book-page-flipped');
//           }
//         }
//       }
//     }
//   };

//   const flipNext = () => {
//     if (currentPage < Math.floor(pagesRef.current.length / 2)) {
//       setCurrentPage(prev => prev + 1);
//     }
//   };

//   const flipPrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(prev => prev - 1);
//     }
//   };

//   const renderPageContent = (pageIndex) => {
//     const content = pagesContent[pageIndex];
//     if (!content || Object.keys(content).length === 0) return null;
    
//     return (
//       <div className="page-content">
//         {content.title && <h2 className="page-title">{content.title}</h2>}
//         {content.subtitle && <h3 className="page-subtitle">{content.subtitle}</h3>}
//         {content.content && (
//           <div className="poem-content">
//             {content.content.split('\n').map((line, i) => (
//               <p key={i}>{line}</p>
//             ))}
//           </div>
//         )}
//         {content.footer && <h4 className="page-footer">{content.footer}</h4>}
//       </div>
//     );
//   };

//   return (
//     <div className="book-container">
//       <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Shrikhand&display=swap" rel="stylesheet" />
      
//       <button className="book-nav book-nav-left" onClick={flipPrev}>
//         &larr;
//       </button>
      
//       <div className="book-main"
//        style={{
//         transform: currentPage > 0 ? 'translateX(180px)' : 'translateX(0)',
//       }}>
//         <div className="book-pages-wrapper">
//           {pagesContent.map((_, index) => (
//             <div 
//               key={index} 
//               className={`book-page ${index % 2 === 0 ? 'page-even' : 'page-odd'}`}
//               onClick={() => {
//                 if (index % 2 === 0 && index / 2 === currentPage) {
//                   flipNext();
//                 } else if (index % 2 === 1 && (index - 1) / 2 === currentPage - 1) {
//                   flipPrev();
//                 }
//               }}
//             >
//               {renderPageContent(index)}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <button className="book-nav book-nav-right" onClick={flipNext}>
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default Book;


import React, { useEffect, useRef, useState } from 'react';
import './CSS/Book.css';

const Book = ({ pageId = 1 }) => {
  const pagesRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(0);

  const pagesContent = [
    {
      title: "भारतातील पहिलं",
      subtitle: "माझं कवितांचं गांव",
      footer: "जकातवाडी राजधानी सातारा",
    },
    {}, // Blank
    {
      title: "कणा",
      content: `ओळखलंत का सर मला?" पावसात आला कोणी,
कपडे होते कर्दमलेले केसांवरती पाणी,
क्षणभर बसला, नंतर हसला, बोलाला वरती पाहून,
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
पाठीवरती हात ठेवून नुसते लढ म्हणा.`
    },
    {}, // Blank
    {
      title: `तुझे माझे जगण
(कुसुमाग्रज)`,
      content:`तुझ्या सहवासातच माझं आयुष्य आहे.
तुझ्या हास्यात माझं सुख आहे,
तुझ्या अश्रूंमध्ये माझं दुःख आहे.
तू चालत असताना मी चालतो,
तू थांबलीस, तर मी थांबतो.

तुझ्या नावातच माझं आयुष्य गुंतलेलं आहे,
तू नाहीस, तर मी काहीच नाही.
तू आहेस म्हणून मी आहे.
हे जग, हे जीवन — सर्व काही
फक्त तुझ्यामुळेच अर्थपूर्ण वाटतं.


`
    },
    {},
    {
      title: `गंध
–कोमल पवार यांच्याप्रणीत प्रेरित`,
      content: `शब्दांत गुंफलेला एक गंध असतो,
जणू आठवणींचा मंदसा दरवळ असतो।
पानगळलेल्या ऋतूमध्येही,
कुठे तरी टवटवीत पाचोळा असतो।

गंध फुलांचा नसेल कधी,
कधी असेल एखाद्या पत्राचा, जुनाट कोपरा।
कधी असेल चहा-बिस्कीटात,
आईच्या पदरातला शांत झरा।

गंध असतो ओळखीचा,
अन ओळखीपलिकडचाही…
कधी तो भेटीत येतो,
तर कधी एकाकी श्वासात राहतो।

तो दिसत नाही, पण जाणवत राहतो,
कधी नात्यांना जपतो, कधी अश्रूंमध्ये वाहतो।
शब्द नसतानाही खूप काही सांगतो,
तोच तर खरं आयुष्य सुगंधित करतो।

`
    }, {}, {
      title: `वाट –प्रेरणा: व. पु. काळे`,
content:`वाट ही थांबत नाही, चालत राहते,
पावलांशी बोलत, मनाला सावरत राहते।
कधी ती सरळ, कधी वळणदार,
कधी ओळखीची, कधी अगदी अनोळखी पार।

वाऱ्याचा स्पर्श, पानगळीचा सडा,
प्रत्येक क्षणात ती देत राहते नवा सडा।
कधी ती साथ देते, कधी प्रश्न विचारते,
शब्दांविनाही ती खूप काही शिकवते।

वाट ही नसते फक्त एका ठिकाणी नेणारी,
ती असते स्वप्नांची, आठवणींची सावली टाकणारी।
कधी थांबायला लावते, कधी धावत नेत जाते,
माणूस शोधतो स्वतःला, वाटेवर चालताना हरवतो आणि गवसतोही तेवढ्याच सहजतेने।`
    }, {}, {
  
    }, {}, {}, {},
  ];

  useEffect(() => {
    const pages = document.getElementsByClassName('book-page');
    pagesRef.current = pages;

    for (let i = 0; i < pages.length; i++) {
      pages[i].style.zIndex = pages.length - i;
    }

    const targetPage = Math.floor(getPageFromId(pageId) / 2);
    setCurrentPage(targetPage);
  }, [pageId]);

  useEffect(() => {
    updatePageFlip();
  }, [currentPage]);

  const getPageFromId = (id) => {
    // You can map poem IDs to their page number dynamically here
    const idToPageMap = {
      1: 2,  // e.g., "कणा" starts on page 2
      2: 4,
      3: 6,
    };
    return idToPageMap[id] || 0;
  };

  const updatePageFlip = () => {
    const pages = pagesRef.current;
    for (let i = 0; i < pages.length; i++) {
      if (i < currentPage * 2) {
        pages[i].classList.add('book-page-flipped');
      } else {
        pages[i].classList.remove('book-page-flipped');
      }
    }
  };

  const flipNext = () => {
    if (currentPage < Math.floor(pagesRef.current.length / 2)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const flipPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const renderPageContent = (index) => {
    const content = pagesContent[index];
    if (!content || Object.keys(content).length === 0) return null;
    return (
      <div className="page-content">
        {content.title && <h2 className="page-title">{content.title}</h2>}
        {content.subtitle && <h3 className="page-subtitle">{content.subtitle}</h3>}
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
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Shrikhand&display=swap"
        rel="stylesheet"
      />

      <button className="book-nav book-nav-left" onClick={flipPrev}>
        &larr;
      </button>

      <div className="book-main"
      style={{
        transform: currentPage > 0 ? 'translateX(180px)' : 'translateX(0)',
      }}>
        
        {[...Array(pagesContent.length)].map((_, i) => (
          <div key={i} className="book-page">
            {renderPageContent(i)}
          </div>
        ))}
      </div>

      <button className="book-nav book-nav-right" onClick={flipNext}>
        &rarr;
      </button>
    </div>
  );
};

export default Book;




