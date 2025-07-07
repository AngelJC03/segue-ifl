// import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/Sidebar';
import Herosection from '../components/home/HeroSection';
import FoundersMessage from '../components/home/FoundersMessage';
import HomeNews from '../components/home/HomeNews';
// import Calendar from '../components/home/Calendar';
import Footer from '../components/footer/Footer'; // Import Footer component

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Herosection />
      <FoundersMessage />
      <HomeNews />
      <Footer />
    </>
  );
}

export default Home;
