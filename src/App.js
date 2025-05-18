import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Coaching from './pages/Coaching';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coaching" element={<Coaching />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
