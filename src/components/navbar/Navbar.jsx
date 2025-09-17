import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file for styling
import Sidebar from './Sidebar'; // Import the Sidebar component
import Hamburger from './Hamburger'; // Import the Hamburger component


function Navbar() {

    const [click, setClick] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); 
    const closeMobileMenu = () => {setClick(false);}  

    //toggle visibility for each dropdown menu for nav-items
    const toggleDropdown = (menuName) => {
        setActiveMenu(prev => prev === menuName ? null : menuName);
    };


    const checkboxRef = useRef(null);

    const handleToggle = () => {
        setClick(prev => !prev);
        if (checkboxRef.current) {
            checkboxRef.current.checked = !click; // sync checkbox with state
        }
    };

    const closeSidebar = () => setClick(false);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light"> 

            <div className="navbar-container">

                <Hamburger click={click} checkboxRef={checkboxRef} handleToggle={handleToggle} />

                <ul className="nav-menu">
                    <li className="nav-item home">
                    <Link to="/Home" className="nav-links-mobile" onClick={() => setClick(closeMobileMenu)}>
                        Home
                    </Link>
                </li>
                <li className={`nav-item dropdown ${activeMenu === 'about' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('about')}>
                        <Link to="" className="nav-links-mobile">
                            About Us <FaAngleDown className={`dropdown-arrow ${activeMenu === 'about' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'about' ? 'show' : ''}`}>
                        <li><Link to="/DistrictMission" className="dropdown-link">District Mission</Link></li>
                        <li><Link to="/SeguePledge" className="dropdown-link">The Segue Pledge</Link></li>
                        <li><Link to="/FoundersMessage" className="dropdown-link">Founders' Message</Link></li>
                        <li><Link to="/SegueBoard" className="dropdown-link">Segue Board</Link></li>
                        <li><Link to="/TeachersAndStaff" className="dropdown-link">Teachers & Staff</Link></li>
                        <li><Link to="/CommunityPartners" className="dropdown-link">Community Partners</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'academics' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('academics')}>
                        <Link to="" className="nav-links-mobile">
                            Academics <FaAngleDown className={`dropdown-arrow ${activeMenu === 'academics' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'academics' ? 'show' : ''}`}>
                        <li><Link to="/Calendar2526" className="dropdown-link">2025-2026 Calendar</Link></li>
                        <li><a href="https://ride.ri.gov/instruction-assessment/assessment/assessment-results" target="_blank" rel="noopener noreferrer" className="dropdown-link">Ride Standardized Test Results</a></li>
                        <li><a href="https://segueifl.powerschool.com/public/" target="_blank" rel="noopener noreferrer" className="dropdown-link">Power School Login</a></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'families' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('families')}>
                        <Link to="" className="nav-links-mobile">
                            Family Resources <FaAngleDown className={`dropdown-arrow ${activeMenu === 'families' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'families' ? 'show' : ''}`}>
                        {/* <li><Link to="/Transportation" className="dropdown-link">Transportation</Link></li>
                        <li><Link to="/ParentAndStudentHandbook" className="dropdown-link">Parent & Student Handbook</Link></li> */}
                        <li><Link to="/SchoolPoliciesAndSafety" className="dropdown-link">School Policies and Safety</Link></li>
                        <li><Link to="/FamilyEngagementCommittee" className="dropdown-link">F.E.C (Family Engagement Committee)</Link></li>
                        <li><Link to="/McKinneyVentoACT" className="dropdown-link">McKinney Vento A.C.T</Link></li>
                        <li><Link to="/FoodPantry" className="dropdown-link">Food Pantry</Link></li>
                        <li><Link to="/PhotoGallery" className="dropdown-link">Photo Gallery</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'enroll' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('enroll')}>
                        <Link to="" className="nav-links-mobile">
                            Enroll <FaAngleDown className={`dropdown-arrow ${activeMenu === 'enroll' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'enroll' ? 'show' : ''}`}>
                        <li><Link to="/HowToEnroll" className="dropdown-link">How to Enroll</Link></li>
                        {/* <li><Link to="/Eligibility" className="dropdown-link">Eligibility</Link></li> */}
                        <li><Link to="/FormsAndDeadlines" className="dropdown-link">Forms & Deadlines</Link></li>
                        <li><Link to="/AdmissionsAndLottery" className="dropdown-link">Admissions and Lottery</Link></li>
                        <li><Link to="/EnrollmentPolicies" className="dropdown-link">Enrollment Policies</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'news' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('news')}>
                        <Link to="" className="nav-links-mobile">
                            News and Events <FaAngleDown className={`dropdown-arrow ${activeMenu === 'news' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'news' ? 'show' : ''}`}>
                        <li><Link to="/EventsCalendar" className="dropdown-link">Event Calendar</Link></li>
                        <li><Link to="/NewsArticles" className="dropdown-link">News Articles</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'news' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('news')}>
                        <Link to="" className="nav-links-mobile">
                            Segue K-8 <FaAngleDown className={`dropdown-arrow ${activeMenu === 'k-8' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'k-8' ? 'show' : ''}`}>
                        <li><Link to="/CurriculumOverview" className="dropdown-link">Curriculum Overview</Link></li>
                        <li><Link to="/Menus" className="dropdown-link">Lunch Menus</Link></li>
                        <li><Link to="/UniformPolicy" className="dropdown-link">Uniform Policy</Link></li>
                        {/* <li><Link to="/SchoolAnnouncements" className="dropdown-link">School Announcements</Link></li> */}
                        <li><Link to="/AfterSchoolPrograms" className="dropdown-link">After School Programs</Link></li>
                        <li><Link to="/K8AfterSchoolEnrichment" className="dropdown-link">After School Enrichment</Link></li>
                        <li><Link to="/K8FitnessAndWellnessPrograms" className="dropdown-link">Fitness & Wellness Programs</Link></li>
                        <li><Link to="/StudentLedActivities" className="dropdown-link">Student-Led Activities</Link></li>
                        <li><Link to="/LibraryExpectations" className="dropdown-link">Library Expectations</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'news' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('news')}>
                        <Link to="" className="nav-links-mobile">
                            Legacy High School <FaAngleDown className={`dropdown-arrow ${activeMenu === 'legacyhs' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'legacyhs' ? 'show' : ''}`}>
                        <li><a href="https://sites.google.com/view/sifl-construction-projects/home" target="_blank" rel="noopener noreferrer" className="dropdown-link">Legacy Construction Progress</a></li>
                        <li><Link to="/LegacyCurriculumOverview" className="dropdown-link">Curriculum Overview</Link></li>
                        <li><Link to="/LegacyMenus" className="dropdown-link">Lunch Menus</Link></li>
                        {/* <li><Link to="/LegacyUniformPolicy" className="dropdown-link">Uniform Policy</Link></li>
                        <li><Link to="/LegacySchoolAnnouncements" className="dropdown-link">School Announcements</Link></li>
                        <li><Link to="/LegacyAfterSchoolPrograms" className="dropdown-link">After School Programs</Link></li>
                        <li><Link to="/LegacyAfterSchoolEnrichment" className="dropdown-link">After School Enrichment</Link></li>
                        <li><Link to="/LegacyFitnessAndWellnessPrograms" className="dropdown-link">Fitness & Wellness Programs</Link></li>
                        <li><Link to="/LegacyStudentLedActivities" className="dropdown-link">Student-Led Activities</Link></li>
                        <li><Link to="/LegacyLibraryExpectations" className="dropdown-link">Library Expectations</Link></li> */}
                    </ul>
                </li>

                </ul>
            </div>
        </nav>

        <Sidebar isOpen={click} onClose={closeSidebar} />

    </>
  );
}

export default Navbar;