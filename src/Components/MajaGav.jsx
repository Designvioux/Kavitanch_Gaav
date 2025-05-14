import React from "react";
import "./CSS/MajaGav.css";


const StatsSection = () => {
    const stats = [
      { value: "1000+", label: "कवी" },
      { value: "400+", label: "सभासद" },
      { value: "5000+", label: "कविता" },
      { value: "250+", label: "संमेलन" },
      { value: "50+", label: "स्पर्धा" }
    ];
return(

    <div className="Header">
        <h1 className="heading">माझं कवितांचं गाव</h1>
        <p className="sub-heading">कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या  आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील. मराठी भाषेच्या सौंदर्यात गुंफलेली ही कवितांची दुनिया तुम्हाला विचारशीलही करेल आणि भावनांनी भारावूनही टाकेल.</p>
    
        <section className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </section>
    </div>
);
};
export default StatsSection;