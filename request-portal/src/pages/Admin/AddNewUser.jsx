import React from 'react'

const AddNewUser = () => {
  return (
    <div className='mt-5'>
        <div className='shadow-none md:shadow-md mx-auto w-full  md:w-8/12 relative border-none md:border overflow-hidden '>
            <div className='circle p-6 hidden md:flex items-center absolute -top-20 -left-20 w-64 h-64 rounded-full shadow-md '>
                <img src={Logo} alt="" className='w-12 absolute left-20 top-24' />
                <h2 className='text-[10px] font-semibold text-white absolute left-[130px] top-[102px]'>OLABISI ONABANJO <br /> UNIVERSY,  AGO-IWOYE </h2>    
            </div>
            
           <div className='flex justify-center content-center h-[calc(100vh-120px)] w-full bg-white md:bg-gray-100'>
                <div className='hidden md:block md:w-1/2'>
                    <img src={loginImage} className='absolute top-32 left-10' alt="" />
                </div>

            <div className='w-full md:w-1/2 md:border-l border-black flex flex-col items-center justify-center shadow-md md:shadow-none'>
                <h1 className='text-2xl mb-10'>Sign In</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)} className='w-full p-5 text-center'>
                    
                    <div className='mb-10'>
                        <input type="email" 
                        id='email'
                        {...register("email", {required: "Email is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your email'
                        />
                        {errors.email && <p className='text-red-500'>{errors.email} </p>}
                    </div>
                    
                    <div className='mb-10'>
                        <input type="password" name="password"
                        id='password' 
                        {...register("Password", {required: "Password is required"})}
                        className='shadow border-b border-black rounded w-full py-2 px-3 bg-[#DEDEFF] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter your password'
                        />
                
                    </div>
                    
                    <button className='bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2' type='submit'>
                        Log In
                    </button>

                </form>
            </div>
           </div>

           <div className='circle-b p-6 hidden md:flex absolute -bottom-20 -right-20 w-60 h-60 rounded-full shadow-md '> 

           </div>
        </div>
    </div>
  )
}

export default AddNewUser