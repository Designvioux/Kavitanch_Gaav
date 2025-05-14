// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import './CSS/Hero.css';

// const dinVisheshData = [
//   {
//     date: '८ मे',
//     content: 'आज ८ मे. नोबेल पुरस्कार विजेते, प्रसिद्ध सूक्ष्मजैविकशास्त्रज्ञ आणि "जैवशास्त्राचे वडील" अशी ख्याती असलेले लुई पाश्चर यांचा जन्मदिन!'
//   },
//   {
//     date: '९ मे',
//     content: 'आज ९ मे. प्रसिद्ध लेखक आणि विचारवंत रवींद्रनाथ टागोर यांचा जन्मदिन!'
//   },
//   {
//     date: '१० मे',
//     content: 'आज १० मे. १८५७ सालच्या स्वातंत्र्य संग्रामाची सुरुवात!'
//   }
// ];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % dinVisheshData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.div
//       className="Hero-Container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2.0 }}
//     >
//       {/* Optional Video Background */}
//       {/* <video autoPlay loop muted className="hero-video">
//         <source src="/videos/hero-background.mp4" type="video/mp4" />
//       </video> */}

//       <motion.div className="Hero-Content" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//         <motion.div className="left-content" initial={{ x: -100 }} animate={{ x: 0 }} >
//           <h4 className="left-head">भारतातील पहिलं</h4>
//           <h2 className="h2-head">
//             माझं कवितांचं गांव <p>जकातवाडी राजधानी सातारा</p>
//           </h2>
//           <p className="left-info">
//             गावातील प्रत्येक भिंतीवर कविता लावलेल्या आहेत. कवींच्या आठवणी जपलेल्या आहेत. हे एकमेव गांव आहे जेथे कविता जिवंत आहेत.
//           </p>
//           <motion.button className="Read-btn" whileHover={{ scale: 1.05 }}>
//             Read More
//           </motion.button>
//         </motion.div>

//         <div className="line"></div>

//         <motion.div className="right-content" initial={{ x: 100 }} animate={{ x: 0 }} >
//           <h4 className="right-head">आजचा दिनविशेष : {dinVisheshData[index].date}</h4>
//           <p className="right-info">{dinVisheshData[index].content}</p>
//           <div className="dots">
//             {dinVisheshData.map((_, i) => (
//               <span
//                 key={i}
//                 className={`dot ${i === index ? 'active' : ''}`}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CSS/Hero.css';
import { dinVishesh } from 'dinvishesh';

const Hero = () => {
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
        ...ghatana.map(item => `【घटना】 ${item}`),
        ...janm.map(item => `【जन्म】 ${item}`),
        ...mrutyu.map(item => `【मृत्यू】 ${item}`)
      ];

      const limitedEvents = allEvents.slice(0, 5); // Max 5 lines

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
      className="Hero-Container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <motion.div className="Hero-Content" initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="left-content" initial={{ x: -100 }} animate={{ x: 0 }}>
          <h4 className="left-head">भारतातील पहिलं</h4>
          <h2 className="h2-head">
            माझं कवितांचं गांव <p>जकातवाडी राजधानी सातारा</p>
          </h2>
          <p className="left-info">
            गावातील प्रत्येक भिंतीवर कविता लावलेल्या आहेत. कवींच्या आठवणी जपलेल्या आहेत. हे एकमेव गांव आहे जेथे कविता जिवंत आहेत.
          </p>
          <motion.button className="Read-btn" whileHover={{ scale: 1.05 }}>
            Read More
          </motion.button>
        </motion.div>

        <div className="line"></div>

      
      </motion.div>
    </motion.div>
  );
};

export default Hero;
