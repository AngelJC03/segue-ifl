// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import SchoolAnnouncementsBody from '../../components/internal/SegueK-8/SchoolAnnouncements/SchoolAnnouncementsBody';

function SchoolAnnouncements() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SchoolAnnouncementsBody />
      <Footer />
    </>
  );
}

export default SchoolAnnouncements;