// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import FECBody from '../../components/internal/FamilyResources/FEC/FECBody';

function FamilyEngagementCommittee() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <FECBody />
      <Footer />
    </>
  );
}

export default FamilyEngagementCommittee;