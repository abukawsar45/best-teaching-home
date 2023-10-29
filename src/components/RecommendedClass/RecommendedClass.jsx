import React from 'react';
import { GiAlliedStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import useProvider from '../../hooks/useProvider';

const RecommendedClass = ({ item }) => {
  const { dark } = useProvider();
  const {
    availableSeat,
    classImage,
    className,
    instructorName,
    price,
    _id,
  } = item || {};
  return (
    <div
      className={` hover:shadow-md hover:shadow-slate-700 duration-200 rounded-lg ${
        dark ? 'bg-slate-900 text-white' : 'bg-slate-200 text-black'
      }  flex flex-col justify-between my-8 `}
    >
      <div>
        <img
          src={classImage || 'https://i.ibb.co/5RMWQpJ/images-2.jpg'}
          alt={classImage}
          className='rounded-lg w-full object-cover h-56 '
          onError={(e) => {
            e.target.src = 'https://i.ibb.co/5RMWQpJ/images-2.jpg';
          }}
        />
      </div>
      <div className='p-5 shadow-lg shadow-slate-300 rounded-lg '>
        <h3 className='text-xl font-bold'>{className}</h3>
        <div className='my-2 md:mt-4 flex justify-between items-center '>
          <p className='text-xl font-bold'>AvailableSeat: {availableSeat} </p>
          <p className='text-xl font-bold'>{price} $ </p>
        </div>
        <div>
          <p className='my-2 lg:my-3 '>{instructorName}</p>
        </div>

        <div className='mt-3 md:mt-6 lg:mt-8 mb-3 md:mb-4 lg:mb-5 '>
          <Link to={`/classDetails/${_id}`}>
            <button className='w-full py-2 bg- text-white bg-[#0076CE] hover:bg-blue-800 rounded-lg '>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedClass;