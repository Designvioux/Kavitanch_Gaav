// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { motion } from 'framer-motion';
// import './CSS/Home-Two.css';
// import { dinVishesh } from 'dinvishesh';

// const HeroTwo = () => {
//   const [todayVishesh, setTodayVishesh] = useState(null);
//   const [activeDot, setActiveDot] = useState(1); // Since this is HeroTwo
//   const navigate = useNavigate();

//   const handleDotClick = (index) => {
//     setActiveDot(index);
//     if (index === 0) {
//       navigate('/'); // Navigate to Hero
//     }
//   };

//   useEffect(() => {
//     const getTodayInIST = () => {
//       const now = new Date();
//       const istDateStr = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
//       return new Date(istDateStr);
//     };

//     const getMarathiDate = (dateObj) => {
//       const marathiMonths = [
//         'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून',
//         'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
//       ];
//       const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

//       const toMarathi = (num) =>
//         String(num)
//           .split('')
//           .map(d => marathiDigits[parseInt(d, 10)])
//           .join('');

//       const day = toMarathi(dateObj.getDate());
//       const month = marathiMonths[dateObj.getMonth()];
//       const year = toMarathi(dateObj.getFullYear());

//       return `${day} ${month} ${year}`;
//     };

//     const loadDinVishesh = () => {
//       const istDate = getTodayInIST();
//       const day = istDate.getDate();
//       const month = istDate.toLocaleString('en-US', { month: 'long' }).toLowerCase();

//       const janm = dinVishesh('janm', month, String(day)) || [];
//       const mrutyu = dinVishesh('mrutyu', month, String(day)) || [];
//       const ghatana = dinVishesh('ghatana', month, String(day)) || [];

//       const allEvents = [
//         ...ghatana.map(item => `घटना :- ${item}`),
//         ...janm.map(item => `【जन्म】 ${item}`),
//         ...mrutyu.map(item => `【मृत्यू】 ${item}`)
//       ];

//       const limitedEvents = allEvents.slice(0, 3);

//       const content =
//         limitedEvents.length > 0
//           ? limitedEvents.join('\n')
//           : 'आज काही विशेष माहिती उपलब्ध नाही.';

//       setTodayVishesh({
//         date: getMarathiDate(istDate),
//         content
//       });
//     };

//     loadDinVishesh();
//   }, []);

//   if (!todayVishesh) {
//     return <div className="Hero-Container">लोड होत आहे...</div>;
//   }

//   return (
//     <motion.div
//       className="Hero-Containers"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2.0 }}
//     >
//       <motion.div className="Hero-Contents" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//         <motion.div className="left-contents" initial={{ x: -100 }} animate={{ x: 0 }}>
//           <h4 className="left-heads">भारतातील पहिलं</h4>
//           <h2 className="h2-heads">
//             माझं कवितांचं गांव <p>जकातवाडी राजधानी सातारा</p>
//           </h2>
//           <p className="left-infos">
//             गावातील प्रत्येक भिंतीवर कविता लावलेल्या आहेत. कवींच्या आठवणी जपलेल्या आहेत. हे एकमेव गांव आहे जेथे कविता जिवंत आहेत.
//           </p>
//           <motion.button
//             className="Read-btns"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate("/about")}
//           >
//             Read More
//           </motion.button>
//         </motion.div>

//         <div className="lines"></div>

//         <motion.div className="right-contents" initial={{ x: 100 }} animate={{ x: 0 }}>
//           <h4 className="right-heads">आजचा दिनविशेष : {todayVishesh.date}</h4>
//           <div className="right-infos" style={{ whiteSpace: 'pre-line', marginTop: '0.5rem' }}>
//             {todayVishesh.content}
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Dots */}
//       <div className="dots-containers">
//         <span
//           className={`dot ${activeDot === 0 ? 'active' : ''}`}
//           onClick={() => handleDotClick(0)}
//         ></span>
//         <span
//           className={`dot ${activeDot === 1 ? 'active' : ''}`}
//           onClick={() => handleDotClick(1)}
//         ></span>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroTwo;




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CSS/Home-Two.css';
import { dinVishesh } from 'dinvishesh';

const HeroTwo = ({ onDotClick, activeDot }) => {
  const [todayVishesh, setTodayVishesh] = useState(null);

  useEffect(() => {
    const getTodayInIST = () => {
      const now = new Date();
      const istDateStr = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
      return new Date(istDateStr);
    };

    const getMarathiDate = (dateObj) => {
      const marathiMonths = [
        'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून',
        'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
      ];
      const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

      const toMarathi = (num) =>
        String(num)
          .split('')
          .map(d => marathiDigits[parseInt(d, 10)])
          .join('');

      const day = toMarathi(dateObj.getDate());
      const month = marathiMonths[dateObj.getMonth()];
      const year = toMarathi(dateObj.getFullYear());

      return `${day} ${month} ${year}`;
    };

    const loadDinVishesh = () => {
      const istDate = getTodayInIST();
      const day = istDate.getDate();
      const month = istDate.toLocaleString('en-US', { month: 'long' }).toLowerCase();

      const janm = dinVishesh('janm', month, String(day)) || [];
      const mrutyu = dinVishesh('mrutyu', month, String(day)) || [];
      const ghatana = dinVishesh('ghatana', month, String(day)) || [];

      const allEvents = [
        ...ghatana.map(item => `घटना :- ${item}`),
        ...janm.map(item => `【जन्म】 ${item}`),
        ...mrutyu.map(item => `【मृत्यू】 ${item}`)
      ];

      const limitedEvents = allEvents.slice(0, 3);

      const content =
        limitedEvents.length > 0
          ? limitedEvents.join('\n')
          : 'आज काही विशेष माहिती उपलब्ध नाही.';

      setTodayVishesh({
        date: getMarathiDate(istDate),
        content
      });
    };

    loadDinVishesh();
  }, []);

  if (!todayVishesh) {
    return <div className="Hero-Container">लोड होत आहे...</div>;
  }

  return (
    <motion.div
      className="Hero-Containers"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <motion.div className="Hero-Contents" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="left-contents" initial={{ x: -100 }} animate={{ x: 0 }}>
          <h4 className="left-heads">भारतातील पहिलं</h4>
          <h2 className="h2-heads">
            माझं कवितांचं गांव <p>जकातवाडी राजधानी सातारा</p>
          </h2>
          <p className="left-infos">
            गावातील प्रत्येक भिंतीवर कविता लावलेल्या आहेत. कवींच्या आठवणी जपलेल्या आहेत. हे एकमेव गांव आहे जेथे कविता जिवंत आहेत.
          </p>
          <motion.button
            className="Read-btns"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert("More information feature coming soon!")}
          >
            Read More
          </motion.button>
        </motion.div>

        <div className="lines"></div>

        <motion.div className="right-contents" initial={{ x: 100 }} animate={{ x: 0 }}>
          <h4 className="right-heads">आजचा दिनविशेष : {todayVishesh.date}</h4>
          <div className="right-infos" style={{ whiteSpace: 'pre-line', marginTop: '0.5rem' }}>
            {todayVishesh.content}
          </div>
        </motion.div>
      </motion.div>

      {/* Dots */}
      <div className="dots-containers">
        <span className={`dot ${activeDot === 0 ? 'active' : ''}`} onClick={() => onDotClick(0)}></span>
        <span className={`dot ${activeDot === 1 ? 'active' : ''}`} onClick={() => onDotClick(1)}></span>
      </div>
    </motion.div>
  );
};

export default HeroTwo;
