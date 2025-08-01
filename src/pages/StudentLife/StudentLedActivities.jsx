// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import StudentLedActivitiesBody from '../../components/internal/StudentLife/StudentLedActivities/StudentLedActivitiesBody';

function StudentLedActivities() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <StudentLedActivitiesBody />
      <Footer />
    </>
  );
}

export default StudentLedActivities;