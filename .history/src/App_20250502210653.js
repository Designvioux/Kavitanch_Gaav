
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
// import Hero from './Components/Hero-Section.jsx';

function App() {
  return (
 <Router>
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
      <Route path="/galleryone" element={<Galleryone/>}/>
    </Routes>
    <Footer/>
  </Router>

  );
}

export default App;
