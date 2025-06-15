import React from 'react';

const MissionPage = () => {
  return (
    <div className="relative bg-[#f3f8e9] min-h-screen flex items-center justify-center px-4 py-20">
      {/* Container */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/Sippurelogo.png" // Make sure this image is in public/ folder
            alt="Sippure Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Mission
        </h1>

        {/* Mission Text */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At <strong>Sippure</strong>, our mission is to bring the purity of nature to your cup. 
          We carefully source organic herbs and botanicals from sustainable farms across the Himalayas, 
          crafting teas that nourish both body and soul. With every sip, we aim to inspire mindful living 
          and promote holistic well-being.
        </p>
      </div>
    </div>
  );
};

export default MissionPage;