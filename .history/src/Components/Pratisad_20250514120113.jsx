import React, { useState } from "react";
import "./CSS/Pratisad.css"
import img1 from "../Images/Rohini.png";
import img2 from "../Images/sandip.png";
import img3 from "../Images/sonali.png";
import img4 from "../Images/monika.png";
const testimonials = [
  {
    name: "संदीप देशमुख",
    title: "कविता वाचक",
    image: img2,
    quote:"ही कविता वाचून मन हलकं झालं. शब्दांमध्ये भावना भरलेली आहे. धन्यवाद अशी कविता आमच्यापर्यंत पोहोचवल्याबद्दल."
  },
  {
    name: "रोहिणी पाटील",
    title: "कविता वाचक",
    image: img1,
    quote:"इथल्या कविता खूप छान आहेत. प्रत्येक ओळ मनाला स्पर्श करून जाते. रोज नवी कविता वाचायला आवडते."
  },
  {
    name: "सोनाली कपसे",
    title: "कविता वाचक",
    image:img3,
    quote: "मी एक मराठी कविता प्रेमी आहे आणि अनेक ब्लॉग्स वाचलेत, पण या वेबसाइटवरच्या कवितांनी मनात एक वेगळीच जागा निर्माण केली. प्रत्येक कविता म्हणजे एक भावना, एक कथा, एक अनुभव. शब्दशैली अतिशय प्रभावी आहे आणि वाचकांना कवितेशी जोडून ठेवते."
  },
  {
    name: "मोनिकाभोंग",
    title: "कविता वाचक",
    image: img4,
    quote: "प्रत्येक कविता म्हणजे एक वेगळा अनुभव! काही कविता वाचून डोळे पाणावले, काहींनी हसवलं, तर काहींनी विचार करायला भाग पाडलं."
  },
  {
    name: "सोनाली कपसे",
    title: "कविता वाचक",
    image:img3,
    quote: "मी एक मराठी कविता प्रेमी आहे आणि अनेक ब्लॉग्स वाचलेत, पण या वेबसाइटवरच्या कवितांनी मनात एक वेगळीच जागा निर्माण केली. प्रत्येक कविता म्हणजे एक भावना, एक कथा, एक अनुभव. शब्दशैली अतिशय प्रभावी आहे आणि वाचकांना कवितेशी जोडून ठेवते."
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(1);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  const getClass = (i) => {
    if (i === index) return "testimonial active";
    if (i === (index - 1 + testimonials.length) % testimonials.length) return "testimonial left";
    if (i === (index + 1) % testimonials.length) return "testimonial right";
    return "testimonial hidden";
  };

  return (
    <div className="testimonial-wrapper">
      <h2 className="heading1">
        <span className="orange">वाचकांचा</span> <span className="black">प्रतिसाद</span>
      </h2>
      <p className="subheading">प्रत्येक ओळीला मिळालेला तुमचा स्नेह!</p>

      <div className="carousel">
        {testimonials.map((item, i) => (
          <div key={i} className={getClass(i)}>
            <img src={item.image} alt={item.name} className="avatar" />
            <h3>{item.name}</h3>
            <p className="title">{item.title}</p>
            <p className="quote">"{item.quote}"</p>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
