import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { MdDashboard } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { FaLocationCrosshairs } from "react-icons/fa6";
import userImage from '../../assets/welc.jpeg'
import { FaBars, FaTimes  } from "react-icons/fa";


const AdminDashboardLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    const location = useLocation();

    const dashboardOptions = [
      { path: "", label: "Dashboard", icon: <MdDashboard className="text-blue-600" /> },
      { path: "request/manage/:id", label: "Manage requests", icon: <MdDashboard className="text-blue-600" /> },
      { path: "add-user", label: "Add user", icon: <MdDashboard className="text-blue-600" /> },
      { path: "create-campus", label: "Create campus", icon: <MdDashboard className="text-blue-600" /> },
      { path: "request/new", label: "New Request", icon: <MdFormatAlignJustify className="text-blue-600" /> },
      { path: "request/details", label: "Request Details", icon: <VscRequestChanges className="text-blue-600" /> },
      { path: "track-requests", label: "Track Request", icon: <FaLocationCrosshairs className="text-blue-600" /> },
    ];

  return (
    <>
      <Navbar />

    
      <section className='flex '>
      <button onClick={handleToggle} className={`sticky p-2 z-50 text-3xl md:hidden ${!isOpen && 'sticky top-0 w-10  bg-gray-800 h-screen' }`}>
        {
          isOpen ? <div className='bg-white rounded fixed top-10 left-52 text-red-600 py-1 px-2'><FaTimes  className='text-2xl'/></div> : 
          <div className=' text-white h-full'><FaBars className='text-white text-lg'/></div>
        }
      </button>
       
          <aside className= {`fixed top-0 left-0 h-full bg-[#e4ecfa] w-64 shadow-md flex flex-col items-center transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-52 h-full`}>

            <div className='mt-10 mb-10'>
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
                  <Link key={index} to={item.path} className={`flex items-center my-6 font-semibold gap-1 text-lg p-1 rounded ${
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

          
            {
              isOpen && (
                <div className='fixed top-0 left-0 w-full bg-black opacity-50 md:hidden' onClick={handleToggle}>

                </div>
              )
            }
         

          <div className='mx-8 w-full'>
            <Outlet />
          </div>
      </section>
    </>
  )
}

export default AdminDashboardLayout;