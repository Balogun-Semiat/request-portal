import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button';
import { useCreateCampusMutation } from '../../../redux/features/adminApi';

const CreateCampus = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [createCampus, {isLoading, isError}] = useCreateCampusMutation()
    const onSubmit = async(data) =>{
        console.log(data)

        try {
            const response = await createCampus(data).unwrap();
            console.log("response", response)
            alert("Campus created successfully")
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className='w-full px-5 py-2 my-8'>
        <label htmlFor="campusName" className='w-full text-lg font-semibold'>Enter campus name:</label>
        <input
            type="text"
            id="campusName"
            name="campusName"
            {...register('campusName', { required: true })}
            className='  w-full border focus:ring-4 focus:outline-none p-3 rounded mt-2'
        />
        {errors.campusName && <p className='text-red-600'> Campus name is required</p>}
        </div>

        <Button
        className={'flex mx-auto'} 
        text={'Create'}/>
        
    </form>
  )
}

export default CreateCampus