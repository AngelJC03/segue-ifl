import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurMission from './pages/AboutUs/OurMission';
import SeguePledge from './pages/AboutUs/SeguePledge';
import FoundersMessage from './pages/AboutUs/FoundersMessage';
import SegueBoard from './pages/AboutUs/SegueBoard';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OurMission" element={<OurMission />} />
          <Route path="/SeguePledge" element={<SeguePledge />} />
          <Route path="/FoundersMessage" element={<FoundersMessage />} />
          <Route path="/SegueBoard" element={<SegueBoard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
