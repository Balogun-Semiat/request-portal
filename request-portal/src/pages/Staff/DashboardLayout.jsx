import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { MdDashboard } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { FaLocationCrosshairs } from "react-icons/fa6";
import userImage from '../../assets/welc.jpeg'


const DashboardLayout = () => {

    const location = useLocation();

    const dashboardOptions = [
      { path: "/staff", label: "Dashboard", icon: <MdDashboard className="text-blue-600" /> },
      { path: "request/new", label: "New Request", icon: <MdFormatAlignJustify className="text-blue-600" /> },
      { path: "request/details", label: "Request Details", icon: <VscRequestChanges className="text-blue-600" /> },
      { path: "track-requests", label: "Track Request", icon: <FaLocationCrosshairs className="text-blue-600" /> },
    ];

  return (
    <>
      <Navbar />
        <section className='flex '>
            <aside className='min-h-screen bg-[#e4ecfa] w-40 shadow-md flex flex-col  items-center'>
              <div className='mt-20 mb-16'>
                  <div >
                    <img src={userImage} alt="" className='rounded-full w-20 h-20'/>
                  </div>
                  <p className='text-xl font-semibold'>Ben Smith</p>
              </div>

              {/* <span className='flex items-center my-10 font-semibold gap-1 text-lg'>
                  <MdDashboard className='text-blue-600'/>
                  <p>Dashboard</p>
                </span> */}

                <div className='items-center'>
                  {dashboardOptions.map((item, index)=>(
                    <Link key={index} to={item.path} className={`flex items-center my-10 font-semibold gap-1 text-lg p-1 rounded ${
                      location.pathname === item.path
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100 "
                    }`}>
                       {item.icon}
                       <p>{item.label}</p>
                    </Link>
                  ))}  
                </div>

            </aside>

            <div className='mx-8 w-full'>
              <Outlet />
            </div>
        </section>
    </>
  )
}

export default DashboardLayout