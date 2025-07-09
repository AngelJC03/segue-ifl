// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import SeguePledgeBody from '../../components/internal/SeguePledge/SeguePledgeBody'; 

function SeguePledge() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div id="google_translate_element"></div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SeguePledgeBody />
      <Footer />
    </>
  );
}

export default SeguePledge;