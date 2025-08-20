// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import SchoolPoliciesAndSafetyBody from '../../components/internal/FamilyResources/SchoolPoliciesAndSafety/SchoolPoliciesBody';

function K8SchoolPoliciesAndSafety() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SchoolPoliciesAndSafetyBody />
      <Footer />
    </>
  );
}

export default K8SchoolPoliciesAndSafety;