import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; // Import the custom sidebar

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideBar /> {/* Use the custom SideBar component */}

      {/* Stylish welcome text, only visible on web view (md and above) */}
      <div className="hidden md:block text-4xl font-extrabold text-blue-600 animate-pulse p-4">
        Welcome to Dashboard
      </div>

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
