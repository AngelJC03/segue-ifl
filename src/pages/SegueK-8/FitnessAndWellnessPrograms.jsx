// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import FitnessAndWellnessProgramsBody from '../../components/internal/SegueK-8/FitnessAndWellnessPrograms/FitnessAndWellnessProgramsBody';

function K8FitnessAndWellnessPrograms() {
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

export default K8FitnessAndWellnessPrograms;