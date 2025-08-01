// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import FitnessAndWellnessProgramsBody from '../../components/internal/StudentLife/FitnessAndWellnessPrograms/FitnessAndWellnessProgramsBody';

function FitnessAndWellnessPrograms() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <FitnessAndWellnessProgramsBody />
      <Footer />
    </>
  );
}

export default FitnessAndWellnessPrograms;