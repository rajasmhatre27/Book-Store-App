import React, { useContext } from 'react';
"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiOutlineCloudUpload, HiInbox, HiShoppingBag, HiTable } from "react-icons/hi";
import { AuthContext } from '../contects/AuthProvider';
import userImg from "../assets/BannerBooks/profile1.jpg"; // Fallback Image

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo 
        href="#" 
        img={user?.photoURL || userImg}  // Use photoURL or fallback
        imgAlt="User Profile"
        className='rounded-full w-16 h-16'
      >
        <p>{ user?.displayName || "Demo User" }</p>
      </Sidebar.Logo>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiShoppingBag}>
            Login
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
