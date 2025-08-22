// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import LegacySchoolAnnouncementsBody from '../../components/internal/LegacyHighSchool/LegacySchoolAnnouncements/LegacySchoolAnnouncementsBody';

function LegacySchoolAnnouncements() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <LegacySchoolAnnouncementsBody />
      <Footer />
    </>
  );
}

export default LegacySchoolAnnouncements;