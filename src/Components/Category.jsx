import React from 'react';
import './CSS/Category.css';
import Love from '../Icons/Love.png';
import Nature from '../Icons/Nature.png';
import Child  from '../Icons/Child.png';
import Samajik from '../Icons/samajik.png';
import Smile from '../Icons/Smile.png';
import Bhakti from '../Icons/Bhakti.png';
import { Link } from 'react-router-dom';

const Category = () => {


  return (


    <div className="Kavita-Category-Container">
      <div className='Category-heading'>
    <h2 className='Kavita-Category-head'><span>कविता</span>     विभाग </h2>
    <p className='Kavita-Category-info'>कविता विभाग हा भावनांचा, विचारांचा आणि अभिव्यक्तीचा अवकाश आहे. येथे तुम्हाला विविध प्रकारच्या मराठी कविता वाचायला मिळतील – प्रेम, निसर्ग, जीवन, सामाजिक प्रश्न, भक्ती आणि प्रेरणादायक अशा अनेक विषयांवर आधारित. नवोदित आणि प्रसिद्ध कवींच्या रचना येथे एकत्र आल्या  आहेत, ज्या तुमच्या मनाला स्पर्श करून जातील. मराठी भाषेच्या सौंदर्यात गुंफलेली ही कवितांची दुनिया तुम्हाला विचारशीलही करेल आणि भावनांनी भारावूनही टाकेल.</p>

      </div>

<div className='Category-card'>

  <div className='card' >
    <h2 className="card-head"><span className="big-card-head">प्रे</span>म</h2>
    <p><span className="bold-info">प्रेम कविता</span> या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो. <Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
    <img src={Love}></img>
  </div>
  <div className='card'>
  <h2 className="card-head"><span className="big-card-head" id="Nature-id">नि</span>सर्ग</h2>
  <p><span className="bold-info">निसर्ग कविता</span> या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो.<Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
  <img src={Nature}></img>
  </div>
  <div className='card'>
  <h2 className="card-head"><span className="big-card-head">बा</span>ल</h2>
  <p><span className="bold-info">बाल कविता</span>या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो.<Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
  <img src={Child}></img>
  </div>
  <div className='card'>
  <h2 className="card-head"><span className="big-card-head">हा</span>स्य</h2>
  <p><span className="bold-info">हास्य कविता</span> या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो.<Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
  </div>
  <div className='card'>
  <h2 className="card-head" id="samajik"><span className="big-card-head">सा</span>माजिक</h2>
  <p><span className="bold-info">सामाजीक कविता</span> या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो.<Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
  <img src={Samajik}></img>
  </div>
  <div className='card'>
  <h2 className="card-head"><span className="big-card-head">भ</span>क्ती</h2>
  <p><span className="bold-info">भक्ती कविता</span> या प्रेम भावना व्यक्त तर करतातच. पण प्रेम म्हणजे नक्की काय? कधी त्यात रुसवा येतो तरी कधी गोडवा.. पण याच सगळ्यातून वाट काढत प्रत्येक जण आपला सुखाचा किनारा शोधत असतो. <Link to ="/Kavita" className='Vacha_button'>वाचा</Link></p>
  <img src={Bhakti}></img>
  </div>
</div>

    </div>
  )


}

export default Category;