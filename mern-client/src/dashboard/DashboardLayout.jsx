import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; // Import the custom sidebar

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideBar /> {/* Use the custom SideBar component */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
