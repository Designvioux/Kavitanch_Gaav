import React, { useState, useEffect } from 'react';
import './CSS/Blog_section.css';
import { Link } from 'react-router-dom';
import news1 from './Images/blog-news-images/news1.png';
import news2 from './Images/blog-news-images/news1.png';
import news3 from './Images/blog-news-images/news1.png';
import news4 from './Images/blog-news-images/news1.png';
import news5 from './Images/blog-news-images/news1.png';
import news6 from './Images/blog-news-images/news1.png';
import news7 from './Images/blog-news-images/news1.png';
import news8 from './Images/blog-news-images/news1.png';
import news9 from './Images/blog-news-images/news1.png';
import news10 from './Images/blog-news-images/news1.png';
import news11 from './Images/blog-news-images/news1.png';
import news12 from './Images/blog-news-images/news1.png';
import Calendar from './Images/calender.png';
import Search from './Images/search-icon.png';




const Blog = ({ blogs }) => {

    const categories = [
        'प्रेम कविता',
        'निसर्ग कविता',
        'बाल कविता',
        'हास्य कविता',
        'सामाजिक कविता',
        'भक्ती कविता',
    ];

    const [activeCategory, setActiveCategory] = useState('प्रेम कविता');

    return (
        <div className="blog-page">
            <div className='blog-title'>
                <h2 className='title'> <span>आमचे</span> ब्लॉग</h2>
                <p className='blog-para'>सामान्य माणसांच्या असामान्य प्रवासांची कहाणी.</p>

                <div className='search-sec'>
                    <div className=''>
                        {/* <p className=''>
                            Search Poems
                        </p> */}
                        <input type="text" className='' placeholder='Search Poems'></input> 
                        <div className='seacrh-icon'>
                            <img src={Search} alt="Search Icon" />
                        </div>
                    </div>
                </div>

                <div className='category-sec'>
                    <h3 className='category-title'>Choose Category</h3>
                </div>

                <div className="category-filters">
                    {categories.map((category, index) => (
                        <p
                            key={index}
                            className={`kavita-filters ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </p>
                    ))}
                </div>

            </div>

            <div className="card-container">
                {/* row 1 */}
                <div className="event-card">

                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news1} alt="Event News" className="card-image" />

                    <span className="card-category">प्रेम</span>

                    <div className="card-content">
                        <p className="card-title">‘गावकुसाबाहेर कविता’</p>
                        <p className="card-title">स्थळ: प्राचीन वडाचं मंदिर</p>
                        <p className="card-title">विषय: "गावाचं कवितेत प्रतिबिंब"</p>
                        <p className="card-description">
                            शिक्षण, कृषि, साहित्य, सहकार, उद्योग, सांस्कृतिक कार्यक्षेत्रां विविध क्षेत्रां मध्ये कर्तृत्वाची शिखरें पादाक्रांत करणारा सातारा हा क्रांतिकारकांचा...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news2} alt="Event News" className="card-image" />

                    <span className="card-category">निसर्ग</span>

                    <div className="card-content">
                        <p className="card-title">जकातवाडी बनतेय कवितांचे गाव</p>
                        <p className="card-description">
                            एकेकाळी विधवा विवाह म्हटले, तर समाजाविरोधात काढलेला शब्द ठरत असे. त्या विरोधात चळवळी झाल्या, त्यापुढे जकातवाडी ग्रामपंचायतीने घेतलेला विधवा पुनर्विवाहास प्रोत्साहन देणारा धोरणात्मक निर्णय...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news3} alt="Event News" className="card-image" />

                    <span className="card-category">बाल</span>

                    <div className="card-content">
                        <p className="card-title">जकातवाडी 'कवितेचे गाव' करण्याचा संकल्प : प्राचार्य पाटणे</p>
                        <p className="card-description">
                            रौप्यमहोत्सवानिमित्त जकातवाडी हे गाव कवितेचे गाव करण्याचा संकल्प केला आहे. हा उपक्रम प्रेरणादायी असून त्याला समाजातील सर्वांचे सहकार्य लाभेल, असे मत कला...                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news4} alt="Event News" className="card-image" />

                    <span className="card-category">हास्य</span>

                    <div className="card-content">
                        <p className="card-title">कविसंमेलन मार्गदर्शन करताना सातारा जिल्‌हा ग्रंथालय अधिकारी मा. आमित सोनवणे </p>
                        <p className="card-description">
                            कविसंमेलन मार्गदर्शन करताना सातारा जिल्‌हा ग्रंथालय अधिकारी मा. आमित सोनवणे वाचनालयाचे अध्यक्ष प्रल्‌हाद पारटे ज्येष्ठ...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>

                {/* row 2 */}

                <div className="event-card">

                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news5} alt="Event News" className="card-image" />

                    <span className="card-category">सामाजिक</span>

                    <div className="card-content">
                        <p className="card-title">जकातवाडीतील भिंती-भिंतींवर कवितांचा साज</p>
                        <p className="card-description">
                            शिक्षण,कृषि,साहित्य,सहकार,उद्योग,सांस्कृतिक कार्यअशा विविध क्षेत्रा मध्ये कर्तृत्वाची शिखरे पादाक्रांत करणारा सातारा हा क्रांतिकारकांचा...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news6} alt="Event News" className="card-image" />

                    <span className="card-category">भक्ती </span>

                    <div className="card-content">
                        <p className="card-title">जकातवाडीत साहित्य संस्कृती वाढीस प्रोत्साहन : करंबळेकर</p>
                        <p className="card-description">
                            'साहित्य संस्कृती वाढविण्यासाठी साहित्य आणि कवींना प्रोत्साहन देण्याची आवश्यकता आहे, ते काम जकातवाडीतील...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news7} alt="Event News" className="card-image" />

                    <span className="card-category">प्रेम</span>

                    <div className="card-content">
                        <p className="card-title">मुले रमली कवितेच्या गावात... जकातवाडी येथे मुलांसाठी विविध उपक्रमांचे आयोजन</p>
                        <p className="card-description">
                            भुर भुर भुरभुर मोटारगाडी कवितेच्या गावाला आम्हाला धाडी उड़ते पक्षी पाहू या...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news8} alt="Event News" className="card-image" />

                    <span className="card-category">निसर्ग</span>

                    <div className="card-content">
                        <p className="card-title">
                            'कवितांचे गाव' लवकरच नावारूपाला येईल रामचंद्र भोसले; जकातवाडीत विद्यावर्धिनी वाचनालयाचा वर्धापन दिन
                        </p>
                        <p className="card-description">
                            'कवितांचे गाय' ही संकल्पना जिल्ह्याची साहित्यिक परंपरा पुढे घेऊन जाणारी आहे...
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>

                {/* row 3 */}

                <div className="event-card">

                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news9} alt="Event News" className="card-image" />

                    <span className="card-category">बाल</span>

                    <div className="card-content">
                        <p className="card-title">
                            सुप्रसिद्ध कवी इंद्रजीत भालेराव यांची कवितेच्या गावास सदिच्छा भेट व मार्गदर्शन अश्विनी सरपंच दळवी
                        </p>
                        <p className="card-description">
                            शिक्षण,कृषि,साहित्य,सहकार,उद्योग,सांस्कृतिक कार्यअशा विविध क्षेत्रा मध्ये कर्तृत्वाची शिखरे पादाक्रांत करणारा सातारा हा क्रांतिकारकांचा....
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news10} alt="Event News" className="card-image" />

                    <span className="card-category">हास्य</span>

                    <div className="card-content">
                        <p className="card-title">'कवितांचे गाव'चे जकातवाडीत अनावरण</p>
                        <p className="card-description">
                            जकातवाडी (ता. सातारा) येथील 'कवितांचे गाव' या नामफलकाचे अनावरण अखिल भारतीय मराठी साहित्य संमेलनाच्या अध्यक्षा अरुणा ढेरे यांच्या हस्ते करण्यात आले. कार्यक्रमास साहित्यिक डॉ. राजेंद्र माने, सातारा..
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news11} alt="Event News" className="card-image" />

                    <span className="card-category">सामाजिक</span>

                    <div className="card-content">
                        <p className="card-title">
                            'कवितेचं गाव' नामफलकाचे अरुणा ढेरेंच्या हस्ते अनावरण
                        </p>
                        <p className="card-description">
                            जकातवाडी, ता. सातारा येथेअखिल भारतीय मराठी साहित्य संमेलनाच्या अध्यक्षा अरुणा ढेरे यांच्या हस्ते कवितांचं गाव नाम फलकाचे अनावरन करण्यात आले....
                        </p>
                    </div>

                    <a href="#" className="card-readmore">वाचा</a>
                </div>


                <div className="event-card">
                    <div className="card-date">
                        <img className='blog-calendar' src={Calendar} alt="" />
                        १४ ऑगस्ट, २०२४</div>

                    <img src={news12} alt="Event News" className="card-image" />

                    <span className="card-category">भक्ती</span>

                    <div className="card-content">
                        <p className="card-title">
                            ‘गावकुसाबाहेर कविता’
                            स्थल: प्राचीन वडाचं मंदिर
                            विषय: "गावाचं कवितेत प्रतिबिंब"
                        </p>
                        <p className="card-description">
                            शिक्षण,कृषि,साहित्य,सहकार,उद्योग,सांस्कृतिक कार्यअशा विविध क्षेत्रा मध्ये कर्तृत्वाची शिखरे पादाक्रांत करणारा सातारा हा क्रांतिकारकांचा...
                        </p>
                    </div>

                    <Link to="/blog-details" className="card-readmore">वाचा</Link>
                </div>

            </div>


            <div className="pagination">
                <button className="page-btn">Prev</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <span className="page-dots">...</span>
                <button className="page-btn">10</button>
                <button className="page-btn">Next</button>
            </div>


        </div>
    )
}

export default Blog;


