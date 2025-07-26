// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import CurriculumOverviewBody from '../../components/internal/Academics/CurriculumOverviewBody'; // Import CurriculumOverviewBody component

function CurriculumOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <CurriculumOverviewBody />
      <Footer />
    </>
  );
}

export default CurriculumOverview;