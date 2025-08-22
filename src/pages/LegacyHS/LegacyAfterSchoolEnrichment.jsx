// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import LegacyAfterSchoolEnrichmentBody from '../../components/internal/LegacyHighSchool/LegacyAfterSchoolEnrichment/LegacyAfterSchoolEnrichmentBody';

function LegacyAfterSchoolEnrichment() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <LegacyAfterSchoolEnrichmentBody />
      <Footer />
    </>
  );
}

export default LegacyAfterSchoolEnrichment;