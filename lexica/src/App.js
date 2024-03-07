import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './home-page';
import AboutPage from './about-page';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navigation Links */}

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
