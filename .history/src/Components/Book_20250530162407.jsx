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
import { title } from 'framer-motion/client';

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
      title:`प्रेम- एक ओढ`,
      content:`ओढ लागते मनाला,
का कळत नाही स्वत:लाच...
जणू अनोळखी वाटसरू,
हळूहळू आपलासा होतो!

नजरेतून नजरेची भाषा,
शब्दांशिवाय सारे सांगते,
मनाच्या कोपऱ्यात खोल कुठे,
अधीरतेची लाट उसळते...

हसण्यातही त्याची आठवण,
श्वासात त्याचा गंध दरवळतो,
क्षणात हरवलेलं भान,
त्याच्या स्पर्शाच्या स्वप्नात न्हालेलं...

प्रेम म्हणजे काही मागणं नाही,
ते तर न सांगता उमजणारं असतं,
मनात खोल रुजून,
साऱ्या भावनांना अर्थ देणारं असतं...

ही ओढ – काही वेगळीच असते,
नात्यांपलीकडची... अव्यक्त,
कधीकधी एक नजरेची भेटही
संपूर्ण आयुष्य व्यापून टाकते...

`
  
    }, {}, {
      title:`सोबत
(राकेश शिंदे शैलीत)
`,
content:`
सोबत चालताना वाटा सोपे वाटतात,
तुझ्या हसण्यात जग रंगलेले वाटतात.
दु:खाचे क्षण असले तरीही हलके होतात,
कारण तुझा हात हातात असतो,
तोच सोबत कायमचा असतो.

क्षणांनी ओढले तरी अंतर फार होत नाही,
मनाच्या ओढीला तुझा आवाज पुरतो.
तुझ्या सावलीत मी सुरक्षित वाटतो,
सुख-दुःखाच्या त्या वाटेवर तु माझा साथीदार आहेस.

सोबत नसतानाही मन तुझ्याशी बोलतं,
तू दूर असलास तरी जवळच वाटतं.
जीवनाच्या या प्रवासात, तूच माझा आधार,
तुझ्या सोबतीनेच कधी न थांबलेला संसार.



`
    }, {},
    {
      title:`असेन मी 
शांता शेलके शैलीतील कविता`,
      content:`
माझं मन म्हणतं
साधेपणातच सौंदर्य आहे,
गडद अंधाराच्या मागेही
एक उजेड दडलेला आहे.

शब्दांची जपमाळ बांधू,
मौनाची छाया घेऊन,
जीवनाच्या प्रवाहात
स्वप्नांना पंख देऊ.

कोणताही गोंधळ नको,
फक्त मनाची शांती हवी,
प्रत्येक क्षणात उमलणारी
आनंदी फुलं पाहिजे.

शांतीच्या सोबतीने
जीवन रंगवू या,
गोड आवाजात कविता म्हणू,
मनातली स्वप्नं उंचावू या.
      `
    },{},{
      title:`आयुष्य
(प्रकाश पवार शैलीत)`,
content:`
आयुष्य हे एक सफरचंद आहे,
स्वप्नांनी भरलेलं, मनाने जपलेलं.
कधी गोड, कधी थोडं खारट,
पण नेहमीच आपल्यासाठी खास असलेलं.

चला, हातात हात घेऊन चालूया,
वाटेवर आलेल्या अडथळ्यांना गमावूया.
जिंकायचंय हसत-खिडखिडत,
आयुष्याच्या प्रत्येक क्षणाला दिलंया हक्काचं स्थान.

कधी येतात धुके, कधी नवे प्रकाश,
परंतु मनाने ठाम राहावं,
आणि जीवनाच्या या सुंदर प्रवासाला,
हसत-खेळत स्वीकारावं.

`
    }, {}, {

      title:`श्रावणसरी  -कुसुमाग्रज`,
      content:`पाऊस...
थेंब… थेंब… थेंब…
क्षणाक्षणांनी टिपत राहिलेला
एक उत्कट श्वास!

पानातल्या पानांवरून
घसरत जाणारा,
फुलांवरून अलगद झरझरत
हळूहळू साचत जाणारा…
तसा हा पाऊसही!

हृदयाच्या खोल कपारीत
भिजवून टाकणारा
एक श्रावणसर!
अश्रूंच्या धारा
की आनंदाचा वर्षाव?

कळेनासं झालंय आता,
पण हा पाऊस...
पुन्हा पुन्हा आठवणींच्या
मातीवर बरसतोय!

`
    },{},
    {
      title:` हिरवा ऋतू - अनिकेत पाटील`,
      content:`हळूच दाट धुक्याच्या कुशीतून
जन्म घेतो एक नवा ऋतू,
जणू निसर्गाचंच गाणं गात
शेतात पसरतो हिरवागार सुगंधू...

आभाळातून टिपूंती सरी,
शेतमळ्यात उमटती हलकीशी धुंदी,
पानोपानी, डोंगररांगा, झाडांवर
फुलते नवी हिरवळ नि आनंदी गंधी...

डोंगराच्या कुशीतून वाहते
झरझरती एक छोटीशी नदी,
पावसात चिंब भिजलेली
ती माती सांगते नवी कवितेची गाथा सदी…

पाखरांचा सूर, वाऱ्याची लय,
ढगांची खेळी, गंधात मय,
सगळं काही लयीतच झुलतं,
जणू ऋतूंनी घेतलंय नवसंजीवनाचं वचनं...

मनात साचलेलं गारवेचं गाणं
हिरव्या ऋतूत पुन्हा वाजतं,
शांत, सुखद, आल्हाददायक
असंच काहीसं हिरवा ऋतू साजरं करतो!

`,
    } , {} , {
      title:``,
      content:``,
    }
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
      4: 8,
      5 :10,
      6 :12,
      7 :14,
      8 :16,
      9 :18,
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




