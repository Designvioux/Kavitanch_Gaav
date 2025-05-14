import React, { useState } from "react";
import "./CSS/Answer.css";

const questions = [
  {
    id: 1,
    question: "आम्हाला पुस्तक प्रकाशित करता येईल का?",
    answer:
      "हो, आपण पुस्तक सहजपणे प्रकाशित करू शकता. आमच्या प्लॅटफॉर्मवरून आपण छापील (Print) व डिजिटल (eBook) स्वरूपात पुस्तक प्रकाशित करू शकता. लेखन पूर्ण झाल्यानंतर, आमच्या मार्गदर्शक तत्त्वांनुसार पान मांडणी (formatting), मुखपृष्ठ डिझाईन आणि इतर तांत्रिक गोष्टींमध्ये आमचा तांत्रिक व संपादकीय टीम आपली मदत करेल.",
  },
  {
    id: 2,
    question: "मी जकतवाडी गावाचा नसलो तरी कविता पाठवू शकतो का?",
    answer: "हो, कोणताही मराठी कवी आपल्या कविता पाठवू शकतो.",
  },
  {
    id: 3,
    question: "माझी कविता प्रसिद्ध होण्यास किती वेळ लागतो?",
    answer: "सामान्यतः ७ दिवसांमध्ये कविता आमच्या वेबसाइटवर प्रसिद्ध केली जाते.",
  },
  {
    id: 4,
    question: "संमेलन आयोजित करण्यात भाग घेता येईल?",
    answer: "हो, आपण आमच्या संमेलन टीमशी संपर्क साधून भाग घेऊ शकता.",
  },
  {
    id: 5,
    question: "कार्यशाळेत कसा सहभाग घ्यावा?",
    answer: "कार्यशाळेची नोंदणी आमच्या वेबसाइटवरून करता येते.",
  },
  {
    id: 6,
    question: "मी कविता पाठवू शकतो का? कशी?",
    answer: "हो. 'Contact Us' विभागातून आपण कविता पाठवू शकता.",
  },
];

const Que = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="ans-contttt">
      <div className="Ans-Container">
        <div>
          <span className="Answer-black">तुमचे प्रश्न, आमची उत्तरं –</span>
          <span className="Ans-orange"> सुलभ आणि स्पष्ट !</span>
          <span className="Ans-black"></span>
        </div>
        <div className="Ans-heading">
          <p>झालेल्या कार्यक्रमांची झलक!</p>
        </div>

        <div className="Ans-que">
          {questions.map((item) => (
            <div key={item.id}>
             <p
  className={`que ${openId === item.id ? "active" : ""}`}
  onClick={() => toggle(item.id)}
>

                {item.question}
                <span style={{ fontWeight: "bold" }}>
                  {openId === item.id ? " −" : " +"}
                </span>
              </p>
              {openId === item.id && (
                <div className="Ans-que-1">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Que;
