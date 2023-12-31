import { useForm } from 'react-hook-form';
import useProvider from '../../hooks/useProvider';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const InstractorAddClass = () => {
  const { user } = useProvider();
  ///console.log(user);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const subjectData = {
      ...data,
      instructorImage: `${user?.photoURL}`,
      date: new Date(),
      status: 'pending',
      availableSeat: parseFloat(data.availableSeat),
    };

    ///console.log(subjectData);
    axios
      .post(
        'https://best-teaching-home-server-abukawsar45.vercel.app/subjects',
        subjectData
      )
      .then((res) => {
        ///console.log(res.data);
        if (res?.data?.insertedId) {
          //  reset();
          Swal.fire('Added Successfully', 'Saved', 'success');
          navigate(`/dashboard/myclass/${user?.email}`);
        }
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
                value={user?.displayName}
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
                value={user?.email}
                {...register('email', { required: true })}
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

export default InstractorAddClass;
