import React from 'react';
import Logo from "../assets/oou-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = [
        {label: 'Dashboard', url: '/staff'},
        {label: 'Request Form', url: '/staff/request/new'},
        {label: 'Request Details', url: '/staff/request/details'},
        {label: 'Track Request', url: '/staff/track-requests'},
    ]
  return (
    <header className=''>
        <nav className='flex bg-[#859ACF] justify-between px-5 md:px-16 items-center py-3'>
            <div className='flex items-center gap-1'>
                <img src={Logo} alt="" className='w-12'/>
                <h2 className='text-[10px] font-semibold text-white '>
                    OLABISI ONABANJO <br /> UNIVERSY,  AGO-IWOYE 
                </h2>    
            </div>

            <div className='hidden md:flex'>
                <ul className='flex gap-10 text-white text-lg'>
                   {
                    navOptions.map((option, index)=>(
                        <Link to={`${option.url}`} key={index}>
                            {option.label}
                        </Link>
                    ))
                   }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar