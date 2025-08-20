import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DistrictMission from './pages/AboutUs/DistrictMission';
import SeguePledge from './pages/AboutUs/SeguePledge';
import FoundersMessage from './pages/AboutUs/FoundersMessage';
import SegueBoard from './pages/AboutUs/SegueBoard';
import Calender2526 from './pages/Academics/Calendar2526';
import TeachersAndStaff from './pages/AboutUs/TeachersAndStaff';
import AdmissionsAndLottery from './pages/Enroll/AdmissionsAndLottery';
import Eligibility from './pages/Enroll/Eligibility';
import HowToEnroll from './pages/Enroll/HowToEnroll';
import FormsAndDeadlines from './pages/Enroll/FormsAndDeadlines';
import ParentAndStudentHandbook from './pages/FamilyResources/ParentAndStudentHandbook';
import AfterSchoolPrograms from './pages/SegueK-8/AfterSchoolPrograms';
import Menus from './pages/SegueK-8/Menus';
import Transportation from './pages/FamilyResources/Transportation';
import FamilyEngagementCommittee from './pages/FamilyResources/FamilyEngagementCommittee';
import McKinneyVentoACT from './pages/FamilyResources/McKinneyVentoACT';
import EventsCalendar from './pages/NewsAndEvents/EventsCalendar';
import SchoolAnnouncements from './pages/SegueK-8/SchoolAnnouncements';
import EnrollmentPolicies from './pages/Enroll/EnrollmentPolicies';
import NewsArticles from './pages/NewsAndEvents/NewsArticles';
import UniformPolicy from './pages/SegueK-8/UniformPolicy';
import CurriculumOverview from './pages/SegueK-8/CurriculumOverview';
import LibraryExpectations from './pages/SegueK-8/LibraryExpectations';
import K8AfterSchoolEnrichment from './pages/SegueK-8/AfterSchoolEnrichment';
import K8FitnessAndWellnessPrograms from './pages/SegueK-8/FitnessAndWellnessPrograms';
import SchoolPoliciesAndSafety from './pages/FamilyResources/SchoolPoliciesAndSafety';
import K8StudentLedActivities from './pages/SegueK-8/StudentLedActivities';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DistrictMission" element={<DistrictMission />} />
          <Route path="/SeguePledge" element={<SeguePledge />} />
          <Route path="/FoundersMessage" element={<FoundersMessage />} />
          <Route path="/SegueBoard" element={<SegueBoard />} />
          <Route path="/Calendar2526" element={<Calender2526 />} />
          <Route path="/CurriculumOverview" element={<CurriculumOverview />} />
          <Route path="/LibraryExpectations" element={<LibraryExpectations />} />
          <Route path="/TeachersAndStaff" element={<TeachersAndStaff />} />
          <Route path="/AdmissionsAndLottery" element={<AdmissionsAndLottery />} />
          <Route path="/Eligibility" element={<Eligibility />} />
          <Route path="/HowToEnroll" element={<HowToEnroll />} />
          <Route path="/EnrollmentPolicies" element={<EnrollmentPolicies />} />
          <Route path="/FormsAndDeadlines" element={<FormsAndDeadlines />} />
          <Route path="/ParentAndStudentHandbook" element={<ParentAndStudentHandbook />} />
          <Route path="/AfterSchoolPrograms" element={<AfterSchoolPrograms />} />
          <Route path="/Menus" element={<Menus />} />
          <Route path="/Transportation" element={<Transportation />} />
          <Route path="/FamilyEngagementCommittee" element={<FamilyEngagementCommittee />} />
          <Route path="/McKinneyVentoACT" element={<McKinneyVentoACT />} />
          <Route path="/UniformPolicy" element={<UniformPolicy />} />
          <Route path="/EventsCalendar" element={<EventsCalendar />} />
          <Route path="/SchoolAnnouncements" element={<SchoolAnnouncements />} />
          <Route path="/NewsArticles" element={<NewsArticles />} />
          <Route path="/K8AfterSchoolEnrichment" element={<K8AfterSchoolEnrichment />} />
          <Route path="/K8FitnessAndWellnessPrograms" element={<K8FitnessAndWellnessPrograms />} />
          <Route path="/SchoolPoliciesAndSafety" element={<SchoolPoliciesAndSafety />} />
          <Route path="/StudentLedActivities" element={<K8StudentLedActivities />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
