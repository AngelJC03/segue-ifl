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
import AdmissionsAndLottery from './pages/Enroll/AdmissionsAndLottery';
import Eligibility from './pages/Enroll/Eligibility';
import HowToEnroll from './pages/Enroll/HowToEnroll';
import FormsAndDeadlines from './pages/Enroll/FormsAndDeadlines';
import SchoolHandbook from './pages/FamilyResources/SchoolHandbook';
import AfterSchoolPrograms from './pages/FamilyResources/AfterSchoolPrograms';
import SchoolLunch from './pages/FamilyResources/SchoolLunch';
import Transportation from './pages/FamilyResources/Transportation';
import UniformPolicy from './pages/FamilyResources/UniformPolicy';
import EventsCalendar from './pages/NewsAndEvents/EventsCalendar';
import PhotoGallery from './pages/NewsAndEvents/PhotoGallery';
import SchoolAnnouncements from './pages/NewsAndEvents/SchoolAnnouncements';
import AfterSchoolEnrichmentPrograms from './pages/StudentLife/AfterSchoolEnrichmentPrograms';
import CheerAndSportsClinics from './pages/StudentLife/CheerAndSportsClinics';
import FitnessAndWellnessPrograms from './pages/StudentLife/FitnessAndWellnessPrograms';
import SchoolPoliciesAndSafety from './pages/StudentLife/SchoolPoliciesAndSafety';
import StudentLedActivities from './pages/StudentLife/StudentLedActivities';
import LegacyHighSchool from './pages/LegacyHS/LegacyHighSchool';

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
          <Route path="/AdmissionsAndLottery" element={<AdmissionsAndLottery />} />
          <Route path="/Eligibility" element={<Eligibility />} />
          <Route path="/HowToEnroll" element={<HowToEnroll />} />
          <Route path="/FormsAndDeadlines" element={<FormsAndDeadlines />} />
          <Route path="/SchoolHandbook" element={<SchoolHandbook />} />
          <Route path="/AfterSchoolPrograms" element={<AfterSchoolPrograms />} />
          <Route path="/SchoolLunch" element={<SchoolLunch />} />
          <Route path="/Transportation" element={<Transportation />} />
          <Route path="/UniformPolicy" element={<UniformPolicy />} />
          <Route path="/EventsCalendar" element={<EventsCalendar />} />
          <Route path="/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/SchoolAnnouncements" element={<SchoolAnnouncements />} />
          <Route path="/AfterSchoolEnrichmentPrograms" element={<AfterSchoolEnrichmentPrograms />} />
          <Route path="/CheerAndSportsClinics" element={<CheerAndSportsClinics />} />
          <Route path="/FitnessAndWellnessPrograms" element={<FitnessAndWellnessPrograms />} />
          <Route path="/SchoolPoliciesAndSafety" element={<SchoolPoliciesAndSafety />} />
          <Route path="/StudentLedActivities" element={<StudentLedActivities />} />
          <Route path="/LegacyHighSchool" element={<LegacyHighSchool />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
