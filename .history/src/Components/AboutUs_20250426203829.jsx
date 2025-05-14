import React from 'react';
import './CSS/AboutUs.css'
import Book from '../Images/bookCover.png';
import Likit from  '../Images/Likhit.png';
import Book2 from  '../Images/Book2.png';
import vachnalay from '../Images/vachnalay.png';
import sanman from '../Images/Sanman.png';
 
const AboutUs = () =>{




return (

  <div className='AboutUs-Container'>

    {/* About Hero Section */}


<div className='Aboutus-HeroSection'>
<h4 className='bhasha'>भाषेचा प्रचार</h4>
<img src={Likit} alt="Likit" className='Likhit-img'></img>

<div className='middle-cont'>
<h2 className='sahitya'>साहित्याच सादरीकरण  </h2>

<img src={Book2} alt='page-book' className='book-pages'></img>

</div>

<img src={Book} alt="Books" className='Books-bunch'></img>
<p className='sanskruti'>संस्कृतीची जोपासना</p>


</div>


{/* About info */}

<div className='About-info'>
  <div className='About-heading'>
  <h3> <span>आमच्या</span>बद्दल</h3>
  <p>भारतातील पाहिलं माझ कवितांचं गाव  जकातवाड</p>
  </div>
  <div className='About-information1'>
    <img src={vachnalay} className='vachnalay'></img>
    <p className='vachnalay-info'>कृष्णाकाठ ज्ञान साधनेची मोठी परंपरा निर्माण झाली विश्वकोषत्याच्याच काही अंतरावर भारतातील पहिलं पुस्तकाचं गाव याच्याच थोड्या अंतरावर निसर्गाच वरदान लाभलेल्याआणिअजिंक्यतारा किल्ल्याच्या कुशीत असलेले खिंडीतील गणपती चे कायम आशिष असणारे जगातील पहिलं कवितांच गाव’जकातवाडी. यागावात पूर्वी सातारा येथे जाण्यासाठी जकात घेतली जायची यावरून या गावास जकातवाडी हे पडले असल्याच इतिहास आहे.या गावात चैत्र पौर्णिमेला गावाची यात्रा असते.या गावात वाचन संस्कृती रुजावी तिचा विकास व्हावा,वाचाल तर वाचाल,गाव तेथे ग्रंथालय या विचाराने २६ ऑक्टोबर१९९२ साली दीपावली पाडव्याच्या दिवशी विद्यावर्धिनी सार्वजनिक ग्राम वाचनालय सुरु करण्यात आले त्याचा परिणाम म्हणून गावात वाचन संस्कृती रुजू लागली तेव्हा पासून वाचनासाठी अशी साधन गावात उपलब्ध झाली ती वाचनालयाचे माध्यमातून. </p>
  </div>
  <div className='About-information2'></div>
    <p >शिक्षण,कृषि,साहित्य,सहकार,उद्योग,सांस्कृतिक कार्यअशा विविध क्षेत्रा मध्ये कर्तृत्वाची शिखरे पादाक्रांत करणारा सातारा हा क्रांतिकारकांचा जिल्हा म्हणून प्रसिद्ध.विविध क्षेत्रामध्ये स्वत:चे एक वेगळे स्थान निर्माण करणारा जिल्हा इतिहासाच्या पावुलखुणांबरोबर जैवविविधतेने नटलेल्या,साहित्यिक व ऐतिहासिक मोलाचा वाटा जतन करणाऱ्या इथल्या मातीत सेनादलात मर्दमुखी गाजवणाऱ्या शूर शिलेदारांचा जिल्हा,इथल्या यात्रा,जत्रा,सन समारंभ,ग्रंथमहोत्सव आणि उत्सवांची वैभवशाली परंपरा सांभाळत इथे घडत आहेत समाज मन. सातारा एक सृजनात्मक वारसा लाभलेला जिल्हा आहे. इतिहासकार,साहित्यिक,पत्रकार,कवी,कलाकार जन्मास आले.</p>
    <img src={vachnalay} className='vachnalay'></img>
</div>








  </div>






)



}



export default AboutUs;