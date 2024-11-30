import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const NewRequest = () => {

  // const {register, watch, handleSubmit, formState: {errors}} = useForm()

  const [selectedRequest, setSelectedRequest] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const requestTypes = [
    {
      category: 'LEAVE MATTERS', 
      subCategories: ['Annual leave', 'Sabbatical Leave', 'Study Leave with pay', 'Study Leave without pay', 'Sick Leave', "Leave of Absence", 'Casual Leave']
    }, 
    {
      category: 'DISENGAGEMENT FROM SERVICE', 
      subCategories: ['Resignation of Appointment', 'Withdrawal of Service', 'Voluntary Retirement', 'Statutory Retirement', 'Termination of Appointment', 'Dismissal']
    },
    {
      category: 'APPRAISAL MATTERS', 
      subCategories: ['Promotion', 'Upgrading', 'Confirmation of Appointments']
    },
    {
      category: 'NOTIFICATIONS', 
      subCategories: ['Commencement of Programmes', 'Completion of Programmes']
    }
  ]

  const onSubmit = async(e)=>{
    e.preventDefault()
    try {
      console.log(
        selectedRequest, description, file
      )
      alert('details received')
    } catch (error) {
      console.error(error)
      alert('Error making request')
    }
  }
  return (
    <div>
      <h2 className='text-3xl font-bold my-5'>Submit a New Request</h2>
     
     <form action="" onSubmit={onSubmit}>
        <div className='mt-8'>
          <label htmlFor="" className='block text-lg'>Request type:</label>
          <select name="request" id="request"
          value={selectedRequest}
          onChange={(e)=>setSelectedRequest(e.target.value)}
          className='px-3 py-1 text-lg border rounded-sm w-full mt-2'
          >
            {
              requestTypes.map((type, index)=>(
                <optgroup key={index} label={type.category}>
                    {
                      type.subCategories.length > 0 ? (
                        type.subCategories.map((sub, index)=>(
                          <option key={index} value={sub}>{sub}</option>
                        ))
                      ) : (<option value={type.category}>{type.category}</option>)
                    }
                </optgroup>
              ))
            }
          </select>
        </div>

        <div className='mt-8'>
          <label htmlFor="" className='block text-lg'>Description:</label>
          <textarea name="description" id="description"
          value={description} 
          onChange={(e)=>setDescription(e.target.value)}
          className='w-full p-3 border rounded-sm mt-2'
          placeholder='Enter description here'
          >

          </textarea>
        </div>

        <div className='mt-8'> 
          <label htmlFor="" className='block text-lg'>Attachments <i>(optional)</i></label>
          
          <div className='border border-dashed mt-2'>
          <input type="file" className='w-full p-5'
          onChange={(e)=>setFile(e.target.files[0])}
          />
          </div>
        </div>

        <div className='flex mx-auto gap-3 mt-12 justify-center'>
          <button type='submit' className='bg-blue-400 text-white font-semibold shadow-md rounded-md p-2 hover:bg-blue-600'>
            Submit Request
          </button>

          <button className='bg-red-600 text-white font-semibold shadow-md rounded-md p-2'>
            Cancel
          </button>
        </div>
     </form>
    </div>
  )
}

export default NewRequest