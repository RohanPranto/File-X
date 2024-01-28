// Layout.js
"use client"
import React, { useState, useEffect } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

function Layout({ children}) {
  const [toggle, setToggle] = useState(window.innerWidth <= 768); // Set initial state based on screen width

  const handleToggle = () => {
    setToggle();
  };

  // Update the toggle state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex ${toggle ? 'hidden md:hidden' : ''}`}>
        <SideNav closeSideBar={() => setToggle(false)} />
      </div>
      <div className="md:ml-64">
        <TopHeader handleToggle={handleToggle} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
