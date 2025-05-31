// // import React from "react";
// // import "./CSS/Object.css";
// // import ebook from "../Images/Ebook.png";
// // import diwali from "../Images/Diwali.png";
// // import magazine from "../Images/Masik.png";
// // import { Link } from 'react-router-dom';

// // const AamchaSahityaSection = () => {
// //   return (
// //     <section className="aamcha-section">
// //       <h2 className="aamcha-title">
// //         <span className="orange-text">आमचं</span> साहित्य
// //       </h2>

// //       <p className="aamcha-description">
// //         कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील.
// //       </p>
      
// //       {/* First Card */}
// //       <div className="aamcha-content">
// //         <div className="aamcha-image">
// //           <img src={ebook} alt="ई-बुक"  />
// //         </div>
// //         <div className="aamcha-card">
// //           <h3 className="ebook-titlee">ई – बुक</h3>
// //           <p className="ebook-desc">
// //             कवितांचं गाव प्लॅटफॉर्मवर खास मराठी कवींसाठी curated ई-पुस्तकांचा संग्रह उपलब्ध आहे. विविध विषयांवरील निवडक कविता, संग्रहित दिवाळी अंक, आणि विशेष साहित्यिक अंक इथे मोफत किंवा प्रीमियम स्वरूपात वाचता येतील.
// //           </p>
// //           <div className="ebook-buttons">
// //            <Link  className="read-button" to="/Ebook">वाचा</Link>
// //             <button className="download-button">Download</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Second Card */}
// //       <div className="aamcha-content">
// //         <div className="aamcha-image">
// //           <img src={diwali} alt="दिवाळी अंक" />
// //         </div>
// //         <div className="aamcha-card">
// //           <h3 className="ebook-titlee">दिवाळी अंक</h3>
// //           <p className="ebook-desc">
// //           प्रत्येक वर्षी प्रकाशित होणारा खास दिवाळी अंक म्हणजे नव्या प्रतिभेला वाव देणारा साहित्यिक उत्सव! जकतवाडी आणि जगभरातील मराठी कवींनी लिहिलेल्या दर्जेदार कविता, लघुकथा, लेख आणि अनुभवांचे संकलन इथे वाचायला मिळेल.          </p>
// //           <div className="ebook-buttons">
// //            <Link  className="read-button" to="/Diwali">वाचा</Link>
// //             <button className="download-button">Download</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Third Card */}
// //       <div className="aamcha-content">
// //         <div className="aamcha-image">
// //           <img src={magazine} alt="मासिक" />
// //         </div>
// //         <div className="aamcha-card">
// //           <h3 className="ebook-titlee">मासिक</h3>
// //           <p className="ebook-desc">
// //           प्रत्येक महिन्यात प्रकाशित होणारं आमचं खास साहित्यिक मासिक – नवोदित आणि प्रस्थापित कवींना एकत्र आणणारं हृदयस्पर्शी व्यासपीठ. विविध कविता, लेख, संवाद आणि प्रेरणादायी साहित्य यांचा संगम – केवळ "कवितांचं गाव" मासिकात!</p>
// //           <div className="ebook-buttons">
// //         <Link  className="read-button" to="/Masik">वाचा</Link>
// //             <button className="download-button">Download</button>
// //           </div>
// //         </div>
// //       </div>
    
// //     </section>
// //   );
// // };

// // export default AamchaSahityaSection;




// import React, { useEffect, useRef } from "react";
// import "./CSS/Object.css";
// import ebook from "../Images/Ebook.png";
// import diwali from "../Images/Diwali.png";
// import magazine from "../Images/Masik.png";
// import { Link } from 'react-router-dom';

// const AamchaSahityaSection = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const options = {
//       threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           entry.target.style.transitionDelay = `${index * 200}ms`;
//           observer.unobserve(entry.target);
//         }
//       });
//     }, options);

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const contentData = [
//     {
//       img: ebook,
//       alt: "ई-बुक",
//       title: "ई – बुक",
//       desc: "कवितांचं गाव प्लॅटफॉर्मवर खास मराठी कवींसाठी curated ई-पुस्तकांचा संग्रह उपलब्ध आहे. विविध विषयांवरील निवडक कविता, संग्रहित दिवाळी अंक, आणि विशेष साहित्यिक अंक इथे मोफत किंवा प्रीमियम स्वरूपात वाचता येतील.",
//       link: "/Ebook"
//     },
//     {
//       img: diwali,
//       alt: "दिवाळी अंक",
//       title: "दिवाळी अंक",
//       desc: "प्रत्येक वर्षी प्रकाशित होणारा खास दिवाळी अंक म्हणजे नव्या प्रतिभेला वाव देणारा साहित्यिक उत्सव! जकतवाडी आणि जगभरातील मराठी कवींनी लिहिलेल्या दर्जेदार कविता, लघुकथा, लेख आणि अनुभवांचे संकलन इथे वाचायला मिळेल.",
//       link: "/Diwali"
//     },
//     {
//       img: magazine,
//       alt: "मासिक",
//       title: "मासिक",
//       desc: "प्रत्येक महिन्यात प्रकाशित होणारं आमचं खास साहित्यिक मासिक – नवोदित आणि प्रस्थापित कवींना एकत्र आणणारं हृदयस्पर्शी व्यासपीठ. विविध कविता, लेख, संवाद आणि प्रेरणादायी साहित्य यांचा संगम – केवळ \"कवितांचं गाव\" मासिकात!",
//       link: "/Masik"
//     }
//   ];

//   return (
//     <section className="aamcha-section">
//       <h2 className="aamcha-title">
//         <span className="orange-text">आमचं</span> साहित्य
//       </h2>

//       <p className="aamcha-description">
//         कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील.
//       </p>

//       {contentData.map((item, index) => (
//         <div
//           className="aamcha-content"
//           key={index}
//           ref={(el) => (cardRefs.current[index] = el)}
//         >
//           <div className="aamcha-image">
//             <img src={item.img} alt={item.alt} />
//           </div>
//           <div className="aamcha-card">
//             <h3 className="ebook-titlee">{item.title}</h3>
//             <p className="ebook-desc">{item.desc}</p>
//             <div className="ebook-buttons">
//               <Link className="read-button" to={item.link}>वाचा</Link>
//               <button className="download-button">Download</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default AamchaSahityaSection;


import React, { useEffect, useRef, useState } from "react";
import "./CSS/Object.css";

import ebook from "../Images/Ebook.png";
import diwali from "../Images/Diwali.png";
import magazine from "../Images/Masik.png";
import { Link } from 'react-router-dom';

const AamchaSahityaSection = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (index !== -1) {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        }
      });
    }, options);
  
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      ref.style.transitionDelay = `${index * 0.1}s`;
      if (index === activeIndex) {
        ref.classList.add("visible");
      } else if ( index !== activeIndex) {
        ref.classList.remove("hidden");
      }
      else{
        ref.classList.remove("visible");
      }
    });
  }, [activeIndex]);

  const contentData = [
    {
      img: ebook,
      alt: "ई-बुक",
      title: "ई – बुक",
      desc: "कवितांचं गाव प्लॅटफॉर्मवर खास मराठी कवींसाठी curated ई-पुस्तकांचा संग्रह उपलब्ध आहे. विविध विषयांवरील निवडक कविता, संग्रहित दिवाळी अंक, आणि विशेष साहित्यिक अंक इथे मोफत किंवा प्रीमियम स्वरूपात वाचता येतील.",
      link: "/Ebook"
    },
    {
      img: diwali,
      alt: "दिवाळी अंक",
      title: "दिवाळी अंक",
      desc: "प्रत्येक वर्षी प्रकाशित होणारा खास दिवाळी अंक म्हणजे नव्या प्रतिभेला वाव देणारा साहित्यिक उत्सव! जकतवाडी आणि जगभरातील मराठी कवींनी लिहिलेल्या दर्जेदार कविता, लघुकथा, लेख आणि अनुभवांचे संकलन इथे वाचायला मिळेल.",
      link: "/Diwali"
    },
    {
      img: magazine,
      alt: "मासिक",
      title: "मासिक",
      desc: "प्रत्येक महिन्यात प्रकाशित होणारं आमचं खास साहित्यिक मासिक – नवोदित आणि प्रस्थापित कवींना एकत्र आणणारं हृदयस्पर्शी व्यासपीठ. विविध कविता, लेख, संवाद आणि प्रेरणादायी साहित्य यांचा संगम – केवळ \"कवितांचं गाव\" मासिकात!",
      link: "/Masik"
    }
  ];

  return (
   
    <section className="aamcha-section">
      <h2 className="aamcha-title">
        <span className="orange-text">आमचं</span> साहित्य
      </h2>

      <p className="aamcha-description">
        कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील.
      </p>

      <div className="cards-wrapper" ref={containerRef}>
  <div className="cards-container">
    {contentData.map((item, index) => (
      <div
        className={`aamcha-content`}
        key={index}
        ref={(el) => (cardRefs.current[index] = el)}
      >
      
      {/* First Card */}
      <div className="process-container">
      <ul id='sahitya-main'>

      <div className="aamcha-content"id="E-book-1" >

        <div className="aamcha-image">
          <img src={item.img} alt={item.alt} />
        </div>

        <div className="aamcha-card">
          <h3 className="ebook-titlee">{item.title}</h3>
          <p className="ebook-desc">{item.desc}</p>

        <div className="aamcha-card" >
          <h3 className="ebook-titlee">ई – बुक</h3>
          <p className="ebook-desc">
            कवितांचं गाव प्लॅटफॉर्मवर खास मराठी कवींसाठी curated ई-पुस्तकांचा संग्रह उपलब्ध आहे. विविध विषयांवरील निवडक कविता, संग्रहित दिवाळी अंक, आणि विशेष साहित्यिक अंक इथे मोफत किंवा प्रीमियम स्वरूपात वाचता येतील.
          </p>

          <div className="ebook-buttons">
            <Link className="read-button" to={item.link}>वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

    ))}
    
  </div>
  
</div>

      {/* Second Card */}
      <div className="aamcha-content" id="Diwali">
        <div className="aamcha-image">
          <img src={diwali} alt="दिवाळी अंक" />
        </div>
        <div className="aamcha-card" id="Diwali">
          <h3 className="ebook-titlee">दिवाळी अंक</h3>
          <p className="ebook-desc">
          प्रत्येक वर्षी प्रकाशित होणारा खास दिवाळी अंक म्हणजे नव्या प्रतिभेला वाव देणारा साहित्यिक उत्सव! जकतवाडी आणि जगभरातील मराठी कवींनी लिहिलेल्या दर्जेदार कविता, लघुकथा, लेख आणि अनुभवांचे संकलन इथे वाचायला मिळेल.          </p>
          <div className="ebook-buttons">
           <Link  className="read-button" to="/Diwali">वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="aamcha-content" id="Masik">
        <div className="aamcha-image">
          <img src={magazine} alt="मासिक" />
        </div>
        <div className="aamcha-card" id="Masik">
          <h3 className="ebook-titlee">मासिक</h3>
          <p className="ebook-desc">
          प्रत्येक महिन्यात प्रकाशित होणारं आमचं खास साहित्यिक मासिक – नवोदित आणि प्रस्थापित कवींना एकत्र आणणारं हृदयस्पर्शी व्यासपीठ. विविध कविता, लेख, संवाद आणि प्रेरणादायी साहित्य यांचा संगम – केवळ "कवितांचं गाव" मासिकात!</p>
          <div className="ebook-buttons">
        <Link  className="read-button" to="/Masik">वाचा</Link>
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>
    </ul>
    </div>

    </section>
  );
};

export default AamchaSahityaSection;