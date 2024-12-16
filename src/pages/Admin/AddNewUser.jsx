import React from 'react';
import Logo from "../../assets/oou-logo.png";
import loginImage from '../../assets/student-1.png';
import {useForm} from 'react-hook-form'
// import Button from './Button';
import axios from 'axios';
import getBaseUrl from '../../utils/baseUrl';
import { useCreateUserMutation } from '../../redux/features/adminApi';

const AddNewUser = () => {
    const {
        register, 
        handleSubmit, 
        watch, 
        formState: {errors}
    } = useForm();

    const [createUser, { isLoading, isError }] = useCreateUserMutation();
    
    const onSubmit = async(data) => {
        const newUserData = {
            ...data
        }

        console.log(newUserData, 'user data')

        if (!newUserData.administrativeRole) {
            delete newUserData.administrativeRole; 
        }
        console.log("Final data", newUserData);

        try {
            await createUser(newUserData).unwrap();
            // console.log("response", response.data);
            alert("User registered successfully")
        } catch (error) {
            console.error(error)
        }
    }

    const staffType = [
        'ACADEMIC_STAFF',
        'NON_TEACHING_STAFF',
        'ADMINISTRATIVE_STAFF'
    ]

    const administrativeRole = [
        "HEAD_OF_DEPARTMENT",
        "HEAD_OF_UNIT",
        "PROVOST",
        "DEAN",
        "DEPUTY REGISTRAR",
        "DEPUTY_REGISTRAR_DELEGATE",
        "REGISTRAR",
        "REGISTRAR_DELEGATE",
        "VICE_CHANCELLOR",
        "SITE_ADMIN"
    ]

    const selectedStaffType = watch('staffType')

  return (
        <div className='w-full mt-8 flex flex-col items-center justify-center shadow-lg font-semibold'>
                <h1 className='text-3xl font-bold my-10'>Register a new user</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)} className='w-full p-5 text-center'>
                    
                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>First Name:</label>
                        <input type="text" 
                        id='firstName'
                        {...register("firstName", {required: "firstName is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder="Enter user's firstName"
                        />
                        {errors.firstName && <p className='text-red-500'>{errors.firstName} </p>}
                    </div>

                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Last Name:</label>
                        <input type="text" 
                        id='lastName'
                        {...register("lastName", {required: "lastName is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder="Enter user's last name"
                        />
                        {errors.lastName && <p className='text-red-500'>{errors.lastName} </p>}
                    </div>

                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Middle Name:</label>
                        <input type="text" 
                        id='middleName'
                        {...register("middleName", {required: "middleName is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder="Enter user's middle name"
                        /> 
                        {errors.middleName && <p className='text-red-500'>{errors.middleName} </p>}
                    </div>

                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Email:</label>
                        <input type="email" 
                        id='email'
                        {...register("email", {required: "Email is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your email'
                        />
                        {errors.email && <p className='text-red-500'>{errors.email} </p>}
                    </div>
                    
                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Staff Type:</label>
                       <select name="staffType" id="staffType" className='px-3 py-1 text-lg border rounded-sm w-full'
                       {...register("staffType", {required: "Staff type is required"})}>
                            <option value="">-- Select Staff Type --</option>
                            {
                                staffType.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))
                            }
                       </select>
                    </div>

                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Phone Number:</label>
                        <input type="number" name="phoneNumber"
                        id='phoneNumber' 
                        {...register("phoneNumber", {required: "Phone number is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your phone number'
                        />
                    </div>

                    {
                        selectedStaffType === 'NON_TEACHING_STAFF' && (
                            <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Unit name</label>
                        <input type="text" name="nonAcademicUnitName"
                        id='nonAcademicUnitName' 
                        {...register("nonAcademicUnitName", {required: "Enter your unit"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your uint name'
                        />
                    </div>
                        )
                    }
                    
                   {
                        selectedStaffType === 'ACADEMIC_STAFF' && (
                            <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                            <label className='text-md md:w-36'>Administrative Role:</label>
                            <select
                                {...register("administrativeRole")}
                                className='px-3 py-1 text-lg border rounded-sm w-full'
                                // defaultValue={"staff"}
                            >
                                <option value="">Select user's role</option>
                                {administrativeRole.map((role, index) => (
                                    <option key={index} value={role}>{role}</option>
                                ))}
                            </select>
                            {errors.administrativeRole && <p className='text-red-500'>{errors.administrativeRole.message}</p>}
                        </div>
                        )
                   }
              
                 
                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Department Name:</label>
                        <input type="text" name="departmentName"
                        id='departmentName' 
                        {...register("departmentName")}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your dept'
                        />
                    </div>

                    <div className='mb-10 grid md:flex gap-2 whitespace-nowrap items-center text-start'>
                        <label htmlFor="" className='text-lg md:w-36'>Password:</label>
                        <input type="text" 
                        id='password'
                        {...register("password", {required: "password is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your password'
                        />
                        {errors.password && <p className='text-red-500'>{errors.password} </p>}
                    </div>
                    
                    <button className='bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2' type='submit'>
                        {
                            isLoading ? 'Adding user' : 'Register'
                        }
                    </button>

                </form>
        </div>
          
  )
}

export default AddNewUser