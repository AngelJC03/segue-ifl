// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import LegacyAfterSchoolProgramsBody from '../../components/internal/LegacyHighSchool/LegacyAfterSchoolPrograms/LegacyAfterSchoolProgramsBody';

function LegacyAfterSchoolPrograms() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <LegacyAfterSchoolProgramsBody />
      <Footer />
    </>
  );
}

export default LegacyAfterSchoolPrograms;