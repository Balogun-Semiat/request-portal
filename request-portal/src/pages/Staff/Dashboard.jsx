import React from 'react'
import Button from '../../components/Button'
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const request = [];

  
  return (
    <div className=''>
        {/* This dashboard here will show the pending or sent request and if there is none, display no pending request and a button to send a new request.
        A side bar for navigating through the pages; */}

        <div className='bg-[#9abff0] p-2 my-5 w-full'>
          <h2 className='text-xl text-white font-semibold'>Welcome, Ben Smith</h2>
        </div>

        <h2 className='text-2xl font-bold mt-8'>Submitted Requests</h2>

        <div className=''>
          {
            request.length === 0 ? 
            <div className='text-2xl font-semibold text-red-500 flex items-center mx-auto mt-10'>You have not sent any request yet</div> : 
             request.map((request, index)=>(
              <div key={index}>
                  <p>{request._id}</p>
                  <p>{request.type}</p>
                  <p>{request.staus}</p>
              </div>
            ))  
          }
        </div>

        <Link to="request/new">
          <Button 
          icon={<IoAdd />}
          text={"New request"}
          className={'mt-10'}
          />
        </Link>
    </div>
  )
}

export default Dashboard