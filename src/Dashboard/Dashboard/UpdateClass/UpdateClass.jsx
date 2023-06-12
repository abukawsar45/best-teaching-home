
import useProvider from '../../../hooks/useProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const UpdateClass = () => {
 
  const [updateData,setUpdateData] = useState({})
  const getData = useParams();
  console.log(updateData)

  const {user} = useProvider();
  console.log(updateData, user);


    useEffect(() => {
      axios
        .get(`http://localhost:5000/class/${getData.id}`)
        .then((res) => {
          console.log(res.data);
          setUpdateData(res.data);
        });
    }, []);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      const subjectData = {
        ...data,
        date: new Date(),
        status: 'pending',
        availableSeat: parseFloat(data.availableSeat),
      };
      
      console.log(subjectData);
      axios
        .patch(`http://localhost:5000/updateClass/${getData.id}`, subjectData)
        .then((res) => {
          console.log(res.data);
          if (res?.data?.modifiedCount > 0) {
            //  reset();
            Swal.fire(
              'Updated Successfully',
              'Saved',
              'success');
            // form.reset();
          } else {
            Swal.fire({
              title: 'Already Updated',
              showClass: {
                popup: 'animate__animated animate__fadeInDown',
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
              },
            });
          }
          // navigate('/');
        });
     
    };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='card-body '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-4 lg:gap-x-6'>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Class Name</span>
              </label>
              <input
                type='text'
                placeholder='class name'
               defaultValue={updateData?.className}
                {...register('className', { required: true })}
                className='input input-bordered'
              />{' '}
              {errors.className && (
                <span className='text-red-600'>This field is required</span>
              )}
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Class Image</span>
              </label>
              <input
                type='text'
                placeholder='class Image'
               defaultValue={updateData.classImage}
                {...register('classImage', { required: true })}
                className='input input-bordered'
              />{' '}
              {errors.classImage && (
                <span className='text-red-600'>This field is required</span>
              )}
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Available Seat</span>
              </label>
              <input
                type='text'
                placeholder='Available Seat'
               defaultValue={updateData.availableSeat}
                {...register('availableSeat', { required: true })}
                className='input input-bordered'
              />{' '}
              {errors.availableSeat && (
                <span className='text-red-600'>This field is required</span>
              )}
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input
                type='text'
                placeholder='fee'
               defaultValue={updateData.price}
                {...register('price', { required: true })}
                className='input input-bordered'
              />{' '}
              {errors.price && (
                <span className='text-red-600'>This field is required</span>
              )}
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Instructor Name</span>
              </label>
              <input
                type='text'
                value={updateData.instructorName}
                {...register('instructorName', { required: true })}
                className='input input-bordered'
              />{' '}
            </div>
            <div className='form-control w-full mt-4'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
               
               value={updateData.email}
                {...register('email', { required: true } )}
                className='input input-bordered'
              />{' '}
            </div>
          </div>

          <div className='form-control mt-6'>
            <input
              type='submit'
              value='Add a Class'
              className='btn submit btn-primary'
            />
          </div>
          <div className='flex flex-col w-full border-opacity-50'></div>
        </div>
      </form>
    </div>
  );
};
export default UpdateClass;