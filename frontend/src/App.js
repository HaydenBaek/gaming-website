import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';

// Import individual brand pages
import Logitech from './pages/Logitech';
import Razer from './pages/Razer';
import Corsair from './pages/Corsair';
import Alienware from './pages/Alienware';
import HyperX from './pages/HyperX';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* Brand Pages */}
        <Route path="/logitech" element={<Logitech />} />
        <Route path="/razer" element={<Razer />} />
        <Route path="/corsair" element={<Corsair />} />
        <Route path="/alienware" element={<Alienware />} />
        <Route path="/hyperx" element={<HyperX />} />
      </Routes>
    </Router>
  );
}

export default App;
