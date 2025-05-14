
import Blog from './Components/Pages/b';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Components/Pages/BlogDetails.jsx';
import Navbar from './Components/Navbar.jsx';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/Blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
