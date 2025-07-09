// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer';
import FoundersMessageBody from '../../components/internal/FoundersMessage/FoundersMessage'; // Import FoundersMessage component

function FoundersMessage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <FoundersMessageBody />
      <Footer />
    </>
  );
}

export default FoundersMessage;