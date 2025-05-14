
import Blog from './Components/Pages/Blog_section.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Components/Pages/BlogDetails.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.js';

function App() {
  return (
    <div>
  
    <Router>
    <Navbar/>
    <Routes>
      <Route
      <Route path="/" element={<Home/>}/>
      <Route path="/Blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
