// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; // Import Footer component
import CommunityPartnersBody from '../../components/internal/AboutUs/CommunityPartners/CommunityPartnersBody'; // Import CommunityPartnersBody component

function CommunityPartners() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <CommunityPartnersBody />
      <Footer />
    </>
  );
}

export default CommunityPartners;