import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import TripReport from './pages/TripReports';
import WorkshopReport from './pages/Workshops';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trip-report" element={<TripReport />} />
        <Route path="/workshops" element={<WorkshopReport />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
