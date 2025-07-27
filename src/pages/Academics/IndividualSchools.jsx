// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import IndividualSchoolsBody from '../../components/internal/Academics/IndividualSchoolsBody'; // Import IndividualSchoolsBody component

function IndividualSchools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <IndividualSchoolsBody />
      <Footer />
    </>
  );
}

export default IndividualSchools;