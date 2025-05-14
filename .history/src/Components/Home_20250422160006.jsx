import './App.css';
import Blog from './Components/Blog_section.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
