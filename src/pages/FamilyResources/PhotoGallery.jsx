// import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
import Footer from '../../components/footer/Footer'; 
import PhotoGalleryBody from '../../components/internal/FamilyResources/PhotoGallery/PhotoGalleryBody'; // Import PhotoGalleryBody component

function PhotoGallery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <PhotoGalleryBody />
      <Footer />
    </>
  );
}

export default PhotoGallery;