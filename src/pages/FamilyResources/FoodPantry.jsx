// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import FoodPantryBody from '../../components/internal/FamilyResources/FoodPantry/FoodPantryBody'; // Import FoodPantryBody component

function FoodPantry() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <FoodPantryBody />
      <Footer />
    </>
  );
}

export default FoodPantry;