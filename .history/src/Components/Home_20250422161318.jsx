
import Blog from '../Components/Pages/Blog_section.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from '../Components/Pages/BlogDetails.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
