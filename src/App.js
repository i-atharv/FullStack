// App.js (Updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/content/:section" element={<Content />} />
            </Routes>
          </div>
        </div>
        <footer>
          <p>&copy; 2024 C Programming Tutorial. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
