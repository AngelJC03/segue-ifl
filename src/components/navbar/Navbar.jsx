// import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file for styling
// import logo from '../../assets/images/navbar-photos/temp-segue-logo.png';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Hamburger from './Hamburger'; // Import the Hamburger component
// import { Button } from './Button'; // Import the Button component if needed


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
                        <li><Link to="/OurMission" className="dropdown-link">Our Mission</Link></li>
                        <li><Link to="/#" className="dropdown-link">The Segue Pledge</Link></li>
                        <li><Link to="/#" className="dropdown-link">Founder's Message</Link></li>
                        <li><Link to="/#" className="dropdown-link">Segue Board</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'academics' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('academics')}>
                        <Link to="" className="nav-links-mobile">
                            Academics <FaAngleDown className={`dropdown-arrow ${activeMenu === 'academics' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'academics' ? 'show' : ''}`}>
                        <li><Link to="/#" className="dropdown-link">Curriculum Overview</Link></li>
                        <li><Link to="/#" className="dropdown-link">Teachers & Staff</Link></li>
                        <li><Link to="/#" className="dropdown-link">2025-2026 Calendar</Link></li>
                        <li><Link to="/#" className="dropdown-link">Library Expectations</Link></li>
                        <li><Link to="/#" className="dropdown-link">Individual Schools</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'families' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('families')}>
                        <Link to="" className="nav-links-mobile">
                            Family Resources <FaAngleDown className={`dropdown-arrow ${activeMenu === 'families' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'families' ? 'show' : ''}`}>
                        <li><Link to="/#" className="dropdown-link">Uniform Policy</Link></li>
                        <li><Link to="/#" className="dropdown-link">After School Programs</Link></li>
                        <li><Link to="/#" className="dropdown-link">School Lunch</Link></li>
                        <li><Link to="/#" className="dropdown-link">Transportation</Link></li>
                        <li><Link to="/#" className="dropdown-link">School Handbook</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'student' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('student')}>
                        <Link to="" className="nav-links-mobile">
                            Student Life <FaAngleDown className={`dropdown-arrow ${activeMenu === 'student' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'student' ? 'show' : ''}`}>
                        <li><Link to="/#" className="dropdown-link">School Policies and Safety</Link></li>
                        <li><Link to="/#" className="dropdown-link">After School Enrichment</Link></li>
                        <li><Link to="/#" className="dropdown-link">Fitness & Wellness Programs</Link></li>
                        <li><Link to="/#" className="dropdown-link">Cheer & Sports Clinics</Link></li>
                        <li><Link to="/#" className="dropdown-link">Student-Led Activities</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'enroll' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('enroll')}>
                        <Link to="" className="nav-links-mobile">
                            Enroll <FaAngleDown className={`dropdown-arrow ${activeMenu === 'enroll' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'enroll' ? 'show' : ''}`}>
                        <li><Link to="/#" className="dropdown-link">How to Enroll</Link></li>
                        <li><Link to="/#" className="dropdown-link">Eligibility</Link></li>
                        <li><Link to="/#" className="dropdown-link">Forms & Deadlines</Link></li>
                        <li><Link to="/#" className="dropdown-link">Admissions and Lottery</Link></li>
                    </ul>
                </li>

                <li className={`nav-item dropdown ${activeMenu === 'news' ? 'active' : ''}`}>
                    <div className="nav-link-with-icon" onClick={() => toggleDropdown('news')}>
                        <Link to="" className="nav-links-mobile">
                            News and Events <FaAngleDown className={`dropdown-arrow ${activeMenu === 'news' ? 'rotate' : ''}`} />
                        </Link>
                    </div>
                    <ul className={`dropdown-menu ${activeMenu === 'news' ? 'show' : ''}`}>
                        <li><Link to="/#" className="dropdown-link">School Announcements</Link></li>
                        <li><Link to="/#" className="dropdown-link">Event Calendar</Link></li>
                        <li><Link to="/#" className="dropdown-link">Photo Gallery</Link></li>
                    </ul>
                </li>

                <li className="nav-item legacyHS-nav">
                    <Link to="/" className="nav-links-mobile" onClick={() => setClick(closeMobileMenu)}>
                        Legacy High School
                    </Link>
                </li>
                </ul>

            </div>
        </nav>

        <Sidebar isOpen={click} onClose={closeSidebar} />

    </>
  );
}

export default Navbar;