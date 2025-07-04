
import Blog from './Components/PageComponents/Blog/Blog_section.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Components/PageComponents/Blog/BlogDetails.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.js';
import Kavita from './Components/PageComponents/Kavita/Kavita.jsx';
import Book from './Components/Book.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Footer from './Components/Footer.jsx';
import Gallery from './Components/PageComponents/Gallery/Gallery.jsx';
import Galleryone from './Components/PageComponents/Gallery/Galleryone.jsx';
import Answer from './Components/PageComponents/PurvaKaryakram/Answer.jsx';
import AnswerTwo from './Components/PageComponents/PurvaKaryakram/AnswerTwo.jsx';
import EBooks from './Components/PageComponents/Object-Links/EBook.jsx';
import Masik from './Components/PageComponents/Object-Links/Masik.jsx';
import DiwaliAnk from './Components/PageComponents/Object-Links/DiwaliAnk.jsx';
import ContactUs from './Components/PageComponents/ContactUs/ContactUs.jsx';
import ContactPop from './Components/PageComponents/';
import SuccessPopup from './Components/PageComponents/ContactUs/SuccesPopUp.jsx';
import TestimonialCarousel from './Components/Pratisad.jsx';
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Prastavit from './Components/Prastavit.jsx';
import Purvkaryakram from './Components/Purva.jsx';
// import Hero from './Components/Hero-Section.jsx';

function App() {
  return (
 <Router>
   <ScrollToTop />
    <Navbar/>
    <Routes>
      {/* <Route path="/Hero" element={<Hero/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/book" element={<Book/>} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/Kavita" element={<Kavita/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/galleryone" element={<Galleryone/>}/>
      <Route path="/Answer" element={<Answer/>}/>
      <Route path="/AnswerTwo" element={<AnswerTwo/>}/>
      <Route path="/Ebook" element={<EBooks/>}/>
      <Route path="/Masik" element={<Masik/>}/>
      <Route path="/Diwali" element={<DiwaliAnk/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/KaviSamelanPop" element={<ContactPop/>}/>
      <Route path="/SuccessPopup" element={<SuccessPopup/>}/>
      <Route path="/Testimonial" element={<TestimonialCarousel/>}/>
      <Route path="/Prastavit" element={<Prastavit/>}/>
      <Route path="/Purva" element={<Purvkaryakram/>}/>
    </Routes>
    <Footer/>
  </Router>

  );
}

export default App;
