import React, { useState } from 'react';
import Prastavit from './Prastavit';
import Purvkaryakram from './Purva';
import './CSS/Karyakram.css'
import './CSS/Prastavit.css'
const KaryakramContainer = () => {
  const [activeTab, setActiveTab] = useState('prastavit');

  const headings = {
    prastavit: {
      title: 'प्रस्तावित कार्यक्रम',
      info: 'नवा कार्यक्रम लवकरच येतोय! काहीतरी खास घेऊन… तयार रहा!',
    },
    purva: {
      title: 'पूर्व कार्यक्रम',
      info: 'कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित.',
    },
  };

  return (
    <div className="Karyakram-Wrapper">
      {/* Dynamic Heading */}
      <div className="Prastavit-head">
        <h1 className="Prastavit-heading">
          <span className="prastavit">{headings[activeTab].title.split(' ')[0]}</span> {headings[activeTab].title.split(' ')[1]}
        </h1>
        <p className="Prastavit-info">{headings[activeTab].info}</p>
      </div>

      {/* Buttons */}
      <div className="Prastavit-buttons">
        <button
          className={`Button-main ${activeTab === 'prastavit' ? 'active' : ''}`}
          onClick={() => setActiveTab('prastavit')}
        >
          प्रस्तावित कार्यक्रम
        </button>
        <button
          className={`Button-main ${activeTab === 'purva' ? 'active' : ''}`}
          onClick={() => setActiveTab('purva')}
        >
          पूर्व कार्यक्रम
        </button>
      </div>

      {/* Data Content */}
      {activeTab === 'prastavit' && <Prastavit onOpenPopup={() => {}} />}
      {activeTab === 'purva' && <Purvkaryakram />}
    </div>
  );
};

export default KaryakramContainer;
