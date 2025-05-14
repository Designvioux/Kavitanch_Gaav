
import Blog from './c';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails.jsx';


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
