// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import FormsAndDeadlinesBody from '../../components/internal/Enroll/FormsAndDeadlines/FormsAndDeadlinesBody';

function FormsAndDeadlines() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <FormsAndDeadlinesBody />
      <Footer />
    </>
  );
}

export default FormsAndDeadlines;