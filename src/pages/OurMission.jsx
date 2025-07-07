// import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/Sidebar';
import Footer from '../components/footer/Footer'; // Import Footer component
import OurMissionBody from '../components/internal/OurMission/OurMissionBody'; // Import OurMissionBody component


function OurMission() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <OurMissionBody />
      <Footer />
    </>
  );
}

export default OurMission;