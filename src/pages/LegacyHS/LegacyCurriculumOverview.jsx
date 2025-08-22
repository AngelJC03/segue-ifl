// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import LegacyCurriculumOverviewBody from '../../components/internal/LegacyHighSchool/LegacyCurriculumOverview/LegacyCurriculumOverviewBody';

function LegacyCurriculumOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <LegacyCurriculumOverviewBody />
      <Footer />
    </>
  );
}

export default LegacyCurriculumOverview;