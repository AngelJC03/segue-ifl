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
        { label: 'Our Mission', path: '/OurMission' },
        { label: 'The Segue Pledge', path: '/SeguePledge' },
        { label: "Founders' Message", path: '/FoundersMessage' },
        { label: 'Segue Board', path: '/SegueBoard' },
      ],
    },
    {
      label: 'Academics',
      path: '',
      submenu: [
        { label: 'Curriculum Overview', path: '/CurriculumOverview' },
        { label: '2025-2026 Calendar', path: '/Calendar2526' },
        { label: 'Teachers & Staff', path: '/TeachersAndStaff' },
        { label: 'Library Expectations', path: '/LibraryExpectations' },
        { label: 'Power School Login', path: 'https://segueifl.powerschool.com/public/' },
      ],
    },
    {
      label: 'Family Resources',
      path: '',
      submenu: [
        { label: 'Uniform Policy', path: '/UniformPolicy' },
        { label: 'After School Programs', path: '/AfterSchoolPrograms' },
        { label: 'School Lunch', path: '/SchoolLunch' },
        { label: 'Transportation', path: '/Transportation' },
        { label: 'School Handbook', path: '/SchoolHandbook' },
      ],
    },
    {
      label: 'Student Life',
      path: '',
      submenu: [
        { label: 'School Policies and Safety', path: '/SchoolPoliciesAndSafety' },
        { label: 'After School Enrichment', path: '/AfterSchoolEnrichmentPrograms' },
        { label: 'Fitness & Wellness Programs', path: '/FitnessAndWellnessPrograms' },
        { label: 'Cheer & Sports Clinics', path: '/CheerAndSportsClinics' },
        { label: 'Student-Led Activities', path: '/StudentLedActivities' },
        { label: 'Photo Gallery', path: '/PhotoGallery' },
      ],
    },
    {
      label: 'Enroll',
      path: '',
      submenu: [
        { label: 'How to Enroll', path: '/HowToEnroll' },
        { label: 'Eligibility', path: '/Eligibility' },
        { label: 'Forms & Deadlines', path: '/FormsAndDeadlines' },
        { label: 'Admissions and Lottery', path: '/AdmissionsAndLottery' },
        { label: 'Enrollment Policies', path: '/EnrollmentPolicies' },
      ],
    },
    {
      label: 'News and Events',
      path: '',
      submenu: [
        { label: 'School Announcements', path: '/SchoolAnnouncements' },
        { label: 'Event Calendar', path: '/EventsCalendar' },
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
                      <Link to={item.path} onClick={onClose} className="sidebar-sublink">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="sidebar-item">
            <Link to="/LegacyHighSchool" onClick={onClose} className="sidebar-link">
              <span>Legacy High School</span>
            </Link>
          </li>
        </ul>

        </div>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
