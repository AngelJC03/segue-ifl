import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/Sidebar';
import Herosection from '../components/home/HeroSection';
import Testimonials from '../components/home/Testimonials';
import HomeNews from '../components/home/HomeNews';
import Calendar from '../components/home/Calendar';
import Footer from '../components/footer/Footer'; // Import Footer component

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Herosection />
      <Testimonials />
      <HomeNews />
      <Calendar />
      <Footer />
    </>
  );
}

export default Home;
