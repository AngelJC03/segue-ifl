import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurMission from './pages/OurMission';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OurMission" element={<OurMission />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
