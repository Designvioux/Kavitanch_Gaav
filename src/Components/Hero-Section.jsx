// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import './CSS/Hero.css';
// import { useNavigate } from 'react-router-dom';


// const Hero = () => {
//   const [activeDot, setActiveDot] = useState(0);
//   const navigate = useNavigate();

//   // Optional: auto-switching dot every few seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveDot(prev => (prev === 0 ? 1 : 0));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);
//   const handleDotClick = (index) => {
//     setActiveDot(index);
//     if (index === 1) {
//       navigate('/herotwo'); // ← this navigates to HeroTwo
//     }
//   };

//   return (
//     <motion.div
//       className="Hero-Container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2.0 }}
//     >
//       <motion.div className="Hero-Content" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//         <motion.div className="left-content" initial={{ x: -100 }} animate={{ x: 0 }}>
//           <h2 className="h2-head">
//             <p>ई-पुस्तकासाठी कविता संकलन फॉर्म</p>
//           </h2>
//           <p className="left-info">
//             प्रिय कवी/कवयित्री,
//             "९९ कवितांची ९९ पुस्तके" या ई-पुस्तक प्रकल्पासाठी तुमचं हार्दिक स्वागत!
//             आपली कविता या संकल्पनेत समाविष्ट व्हावी, हीच आमची इच्छा आहे. कृपया खालील माहिती काळजीपूर्वक भरा.
//           </p>
//           <motion.a
//             className="Read-btn"
//             whileHover={{ scale: 1.05 }}
//             href="https://forms.gle/qcVfoZmoiXufV6aY7"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//            संकलन नोंदणी {/* Register Now */}
//           </motion.a>
//         </motion.div>

//         <div className="line"></div>

//         <motion.div className="right-content" initial={{ x: 100 }} animate={{ x: 0 }}>
//           <h4 className="right-head">साहित्यिक नोंदणीसाठी प्रश्नावली</h4>
//           <div className="right-info">
//             "माझं कवितांचं गाव – जकातवाडी राजधानी सातारा" या अभिनव उपक्रमाच्या माध्यमातून राज्यभरातील आणि देशभरातील विविध स्तरांतील कवी, लेखक, साहित्यिक यांना एकत्र आणण्याचा प्रयत्न सुरू आहे. या उपक्रमाचा भाग म्हणून आम्ही एक विस्तृत साहित्यिक सूची तयार करत आहोत.
//           </div>

//           <motion.a
//             className="Read-btn1"
//             whileHover={{ scale: 1.05 }}
//             href="https://forms.gle/H8vhvZpLianANp3d8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//            सूची नोंदणी {/* Register Now */}
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* Dots */}
//      <div className="dots-container">
//   <span
//     className={`dot ${activeDot === 0 ? 'active' : ''}`}
//     onClick={() => handleDotClick(0)}
//   ></span>
//   <span
//     className={`dot ${activeDot === 1 ? 'active' : ''}`}
//     onClick={() => handleDotClick(1)}
//   ></span>
// </div>
//     </motion.div>
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import './CSS/Hero.css';

const Hero = ({ onDotClick, activeDot }) => {
  return (
    <motion.div
      className="Hero-Container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <motion.div className="Hero-Content" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="left-content" initial={{ x: -100 }} animate={{ x: 0 }}>
          <h2 className="h2-head">
            <p>ई-पुस्तकासाठी कविता संकलन फॉर्म</p>
          </h2>
          <p className="left-info">
            प्रिय कवी/कवयित्री,
            "९९ कवितांची ९९ पुस्तके" या ई-पुस्तक प्रकल्पासाठी तुमचं हार्दिक स्वागत!
            आपली कविता या संकल्पनेत समाविष्ट व्हावी, हीच आमची इच्छा आहे. कृपया खालील माहिती काळजीपूर्वक भरा.
          </p>
          <motion.a
            className="Read-btn"
            whileHover={{ scale: 1.05 }}
            href="https://forms.gle/qcVfoZmoiXufV6aY7"
            target="_blank"
            rel="noopener noreferrer"
          >
            संकलन नोंदणी
          </motion.a>
        </motion.div>

        <div className="line"></div>

        <motion.div className="right-content" initial={{ x: 100 }} animate={{ x: 0 }}>
          <h4 className="right-head">साहित्यिक नोंदणीसाठी प्रश्नावली</h4>
          <div className="right-info">
            "माझं कवितांचं गाव – जकातवाडी राजधानी सातारा" या अभिनव उपक्रमाच्या माध्यमातून राज्यभरातील आणि देशभरातील विविध स्तरांतील कवी, लेखक, साहित्यिक यांना एकत्र आणण्याचा प्रयत्न सुरू आहे. या उपक्रमाचा भाग म्हणून आम्ही एक विस्तृत साहित्यिक सूची तयार करत आहोत.
          </div>
          <motion.a
            className="Read-btn1"
            whileHover={{ scale: 1.05 }}
            href="https://forms.gle/H8vhvZpLianANp3d8"
            target="_blank"
            rel="noopener noreferrer"
          >
            सूची नोंदणी
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Dots */}
      <div className="dots-container">
        <span className={`dot ${activeDot === 0 ? 'active' : ''}`} onClick={() => onDotClick(0)}></span>
        <span className={`dot ${activeDot === 1 ? 'active' : ''}`} onClick={() => onDotClick(1)}></span>
      </div>
    </motion.div>
  );
};

export default Hero;
