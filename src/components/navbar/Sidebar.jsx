// import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import logo from '../../assets/images/navbar-photos/temp-segue-logo.png';

function Sidebar({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

    const mainLinks = [
    {
      label: 'About Us',
      path: '',
      submenu: [
        { label: 'District Mission', path: '/DistrictMission' },
        { label: 'The Segue Pledge', path: '/SeguePledge' },
        { label: "Founders' Message", path: '/FoundersMessage' },
        { label: 'Segue Board', path: '/SegueBoard' },
        { label: 'Teachers & Staff', path: '/TeachersAndStaff' },
        { label: 'Community Partners', path: '/CommunityPartners' },
      ],
    },
    {
      label: 'Academics',
      path: '',
      submenu: [
        { label: '2025-2026 Calendar', path: '/Calendar2526' },
        { label: 'Ride Standardized Test Results', path: 'https://ride.ri.gov/instruction-assessment/assessment/assessment-results' },
        { label: 'Power School Login', path: 'https://segueifl.powerschool.com/public/' },
      ],
    },
    {
      label: 'Family Resources',
      path: '',
      submenu: [
        { label: 'School Policies and Safety', path: '/SchoolPoliciesAndSafety' },
        // { label: 'Transportation', path: '/Transportation' },
        // { label: 'Parent & Student Handbook', path: '/ParentAndStudentHandbook' },
        { label: 'F.E.C (Family Engagement Committee)', path: '/' },
        { label: 'McKinney Vento A.C.T', path: '/McKinneyVentoACT' },
        { label: 'Food Pantry', path: '/FoodPantry' },
        { label: 'Photo Gallery', path: '/PhotoGallery' },
      ],
    },
    {
      label: 'Enroll',
      path: '',
      submenu: [
        { label: 'How to Enroll', path: '/HowToEnroll' },
        // { label: 'Eligibility', path: '/Eligibility' },
        { label: 'Forms & Deadlines', path: '/FormsAndDeadlines' },
        { label: 'Admissions and Lottery', path: '/AdmissionsAndLottery' },
        { label: 'Enrollment Policies', path: '/EnrollmentPolicies' },
      ],
    },
    {
      label: 'News and Events',
      path: '',
      submenu: [
        { label: 'Event Calendar', path: '/EventsCalendar' },
        { label: 'News Articles', path: '/NewsArticles' },
      ],
    },
    {
      label: 'Segue K-8',
      submenu: [
        { label: 'Curriculum Overview', path: '/CurriculumOverview' },
        { label: 'Lunch Menus', path: '/Menus' },
        { label: 'Uniform Policy', path: '/UniformPolicy' },
        // { label: 'School Announcements', path: '/SchoolAnnouncements' },
        { label: 'After School Programs', path: '/AfterSchoolPrograms' },
        { label: 'After School Enrichment', path: '/K8AfterSchoolEnrichment' },
        { label: 'Fitness & Wellness Programs', path: '/K8FitnessAndWellnessPrograms' },
        { label: 'Student-Led Activities', path: '/StudentLedActivities' },
        { label: 'Library Expectations', path: '/LibraryExpectations' },
      ],
    },
    {
      label: 'Legacy High School',
      submenu: [
        { label: 'Legacy Construction Progress', path: 'https://sites.google.com/view/sifl-construction-projects/home' },
        { label: 'Curriculum Overview', path: '/LegacyCurriculumOverview' },
        { label: 'Lunch Menus', path: '/LegacyMenus' },
        // { label: 'Uniform Policy', path: '/LegacyUniformPolicy' },
        // { label: 'School Announcements', path: '/LegacySchoolAnnouncements' },
        // { label: 'After School Programs', path: '/LegacyAfterSchoolPrograms' },
        // { label: 'After School Enrichment', path: '/LegacyAfterSchoolEnrichment' },
        // { label: 'Fitness & Wellness Programs', path: '/LegacyFitnessAndWellnessPrograms' },
        // { label: 'Student-Led Activities', path: '/LegacyStudentLedActivities' },
        // { label: 'Library Expectations', path: '/LegacyLibraryExpectations' },
      ],
    },
  ];


  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <Link to="/Home" className="sidebar-logo-container" onClick={onClose}>
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </Link>

        <div className="sidebar-content">
          <ul className="sidebar-menu">
          {mainLinks.map(({ label, path, submenu }, index) => (
            <li key={index} className="sidebar-item">
              <div
                className="sidebar-link"
                onClick={() => toggleDropdown(label)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggleDropdown(label);
                }}
              >
                <span>{label}</span>
                <FaAngleRight
                  className={`sidebar-arrow ${openDropdown === label ? 'rotate' : ''}`}
                />
              </div>

              {/* Dropdown menu */}
              {openDropdown === label && submenu && (
                <ul className="sidebar-submenu">
                  {submenu.map((item, idx) => (
                    <li key={idx} className="sidebar-subitem">
                      {item.path.startsWith("http") ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sidebar-sublink"
                          onClick={onClose}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link to={item.path} onClick={onClose} className="sidebar-sublink">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        </div>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
