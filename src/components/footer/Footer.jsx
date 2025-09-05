import './Footer.css';
import { Link } from 'react-router-dom';
import SegueLogo from '../../assets/images/logo-photos/temp-segue-logo.png';
import LegacyHSLogo from '../../assets/images/logo-photos/LegacyHighSchool-logo.jpg';
import facebookIcon from '../../assets/images/footer-photos/icons8-facebook-48.png';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer-container">
            {/* Top part: contacts + logos */}
            <div className="footer-sections">
                <div className="footer-contacts">
                    <h1>Contact Us</h1>
                    <p><strong>Segue Institute for Learning</strong></p>
                    <p>
                        Address: <a href="https://www.google.com/maps/search/?api=1&query=325+Cowden+St,+Central+Falls,+RI+02863" target="_blank" rel="noreferrer">
                            325 Cowden Street, Central Falls, RI 02863
                        </a>
                    </p>
                    <p>Phone: <a href="tel:+14017210964">(401) 721-0964</a></p>
                    <p>Fax: (401) 721-0984</p>
                    <p>
                        Website: <a href="https://www.segueifl.org" target="_blank" rel="noreferrer">www.segueifl.org</a>
                    </p>
                    <p>
                        Email: <a href="mailto:information@segueifl.org">information@segueifl.org</a>
                    </p>
                    <p>Follow us on social media:</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/SegueIFL" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="Facebook Icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-logo">
                    <Link to="/" onClick={scrollToTop} className="footer-segue-logo">
                        <img src={SegueLogo} alt="Segue Logo" />
                    </Link>
                    <Link to="/LegacyCurriculumOverview" onClick={scrollToTop} className="footer-legacyhs-logo">
                        <img src={LegacyHSLogo} alt="Legacy High School Logo" />
                    </Link>
                </div>
            </div>

            {/* Footer nav links */}
            <div className="footer-nav">
                <div className="footer-nav-section">
                    <h4>Home</h4>
                    <Link to="/" onClick={scrollToTop}>Home</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>About Us</h4>
                    <Link to="/DistrictMission" onClick={scrollToTop}>District Mission</Link>
                    <Link to="/SeguePledge" onClick={scrollToTop}>The Segue Pledge</Link>
                    <Link to="/FoundersMessage" onClick={scrollToTop}>Founders' Message</Link>
                    <Link to="/SegueBoard" onClick={scrollToTop}>Segue Board</Link>
                    <Link to="/TeachersAndStaff" onClick={scrollToTop}>Teachers & Staff</Link>
                    <Link to="/CommunityPartners" onClick={scrollToTop}>Community Partners</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>Academics</h4>
                    <Link to="/Calendar2526" onClick={scrollToTop}>2025-2026 Calendar</Link>
                    <a href="/home" target="_blank" rel="noopener noreferrer">RIDE Standardized Test Results</a>
                    <a href="https://segueifl.powerschool.com/public/" target="_blank" rel="noopener noreferrer">Power School Login</a>
                </div>

                <div className="footer-nav-section">
                    <h4>Family Resources</h4>
                    <Link to="/Transportation" onClick={scrollToTop}>Transportation</Link>
                    <Link to="/ParentAndStudentHandbook" onClick={scrollToTop}>Parent & Student Handbook</Link>
                    <Link to="/SchoolPoliciesAndSafety" onClick={scrollToTop}>School Policies and Safety</Link>
                    <Link to="/FamilyEngagementCommittee" onClick={scrollToTop}>F.E.C (Family Engagement Committee)</Link>
                    <Link to="/McKinneyVentoACT" onClick={scrollToTop}>McKinney Vento A.C.T</Link>
                    <Link to="/FoodPantry" onClick={scrollToTop}>Food Pantry</Link>
                    <Link to="/PhotoGallery" onClick={scrollToTop}>Photo Gallery</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>Enroll</h4>
                    <Link to="/HowToEnroll" onClick={scrollToTop}>How to Enroll</Link>
                    <Link to="/Eligibility" onClick={scrollToTop}>Eligibility</Link>
                    <Link to="/FormsAndDeadlines" onClick={scrollToTop}>Forms & Deadlines</Link>
                    <Link to="/AdmissionsAndLottery" onClick={scrollToTop}>Admissions and Lottery</Link>
                    <Link to="/EnrollmentPolicies" onClick={scrollToTop}>Enrollment Policies</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>News & Events</h4>
                    <Link to="/EventsCalendar" onClick={scrollToTop}>Event Calendar</Link>
                    <Link to="/NewsArticles" onClick={scrollToTop}>News Articles</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>Segue K-8</h4>
                    <Link to="/CurriculumOverview" onClick={scrollToTop}>Curriculum Overview</Link>
                    <Link to="/Menus" onClick={scrollToTop}>Lunch Menus</Link>
                    <Link to="/UniformPolicy" onClick={scrollToTop}>Uniform Policy</Link>
                    <Link to="/SchoolAnnouncements" onClick={scrollToTop}>School Announcements</Link>
                    <Link to="/AfterSchoolPrograms" onClick={scrollToTop}>After School Programs</Link>
                    <Link to="/K8AfterSchoolEnrichment" onClick={scrollToTop}>After School Enrichment</Link>
                    <Link to="/K8FitnessAndWellnessPrograms" onClick={scrollToTop}>Fitness & Wellness Programs</Link>
                    <Link to="/StudentLedActivities" onClick={scrollToTop}>Student-Led Activities</Link>
                    <Link to="/LibraryExpectations" onClick={scrollToTop}>Library Expectations</Link>
                </div>

                <div className="footer-nav-section">
                    <h4>Legacy High School</h4>
                    <Link to="/LegacyCurriculumOverview" onClick={scrollToTop}>Curriculum Overview</Link>
                    <Link to="/LegacyMenus" onClick={scrollToTop}>Lunch Menus</Link>
                    <Link to="/LegacyUniformPolicy" onClick={scrollToTop}>Uniform Policy</Link>
                    <Link to="/LegacySchoolAnnouncements" onClick={scrollToTop}>School Announcements</Link>
                    <Link to="/LegacyAfterSchoolPrograms" onClick={scrollToTop}>After School Programs</Link>
                    <Link to="/LegacyAfterSchoolEnrichment" onClick={scrollToTop}>After School Enrichment</Link>
                    <Link to="/LegacyFitnessAndWellnessPrograms" onClick={scrollToTop}>Fitness & Wellness Programs</Link>
                    <Link to="/LegacyStudentLedActivities" onClick={scrollToTop}>Student-Led Activities</Link>
                    <Link to="/LegacyLibraryExpectations" onClick={scrollToTop}>Library Expectations</Link>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Segue Institute for Learning. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
