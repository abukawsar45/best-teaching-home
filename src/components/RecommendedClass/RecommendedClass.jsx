import React from 'react';
import { GiAlliedStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const RecommendedClass = ({ item, setSelectedClass, selectedClass }) => {
  // console.log(item);
  const {
    _id,
    about,
    deliveryTime,
    image,
    intro,
    name,
    price,
    rating,
    reviewCount,
    taskComplexity,
    testimonial,
  } = item || {};
  return (
    <div className=' flex flex-col justify-between'>
      <div>
        <img
          src={image || 'https://i.ibb.co/5RMWQpJ/images-2.jpg'}
          alt={image}
          className='rounded-lg w-full object-cover h-56 '
          onError={(e) => {
            e.target.src = 'https://i.ibb.co/5RMWQpJ/images-2.jpg';
          }}
        />
      </div>
      <div className='p-5 shadow-lg shadow-slate-300  bg-gray-50'>
        <div className='flex justify-between items-center '>
          <h3 className='text-xl font-bold'>{name}</h3>
          <p className='text-xl font-bold'>{price} </p>
        </div>
        <div>
          <p className='my-2 lg:my-3 '>{intro}</p>
        </div>
        <div className=' flex items-center'>
          <GiAlliedStar className='text-2xl text-[#0076CE]' />
          <p className='mx-2 text-xl text-[#0076CE] font-bold'>
            {' '}
            {rating}{' '}
          </p>{' '}
          <span className='text-xl'>({reviewCount} )</span>
        </div>
        <div className='mt-3 md:mt-6 lg:mt-8 mb-3 md:mb-4 lg:mb-5 '>
          <Link to={`/cardDetails/${_id}`}>
            <button
              onClick={() => setSelectedCard(!selectedCard)}
              className='w-full py-2 bg- text-white bg-[#0076CE] hover:bg-blue-800 rounded-lg '
            >
              View services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedClass;