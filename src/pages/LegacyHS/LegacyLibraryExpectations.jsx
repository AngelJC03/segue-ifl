// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import LegacyLibraryExpectationsBody from '../../components/internal/LegacyHighSchool/LegacyLibraryExpectations/LegacyLibraryExpectationsBody';

function LegacyLibraryExpectations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <LegacyLibraryExpectationsBody />
      <Footer />
    </>
  );
}

export default LegacyLibraryExpectations;