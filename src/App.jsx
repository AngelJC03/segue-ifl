import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurMission from './pages/AboutUs/OurMission';
import SeguePledge from './pages/AboutUs/SeguePledge';
import FoundersMessage from './pages/AboutUs/FoundersMessage';
import SegueBoard from './pages/AboutUs/SegueBoard';
import Calender2526 from './pages/Academics/Calendar2526';
import IndividualSchools from './pages/Academics/IndividualSchools';
import CurriculumOverview from './pages/Academics/CurriculumOverview';
import LibraryExpectations from './pages/Academics/LibraryExpectations';
import TeachersAndStaff from './pages/Academics/TeachersAndStaff';

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
          <Route path="/Calendar2526" element={<Calender2526 />} />
          <Route path="/IndividualSchools" element={<IndividualSchools />} />
          <Route path="/CurriculumOverview" element={<CurriculumOverview />} />
          <Route path="/LibraryExpectations" element={<LibraryExpectations />} />
          <Route path="/TeachersAndStaff" element={<TeachersAndStaff />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
