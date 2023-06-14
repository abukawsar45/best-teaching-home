
import { HiOutlineMail } from 'react-icons/hi';
import CartTitle from '../../utilities/CartTitle/CartTitle';

const PopularInstructor = ({instructor}) => {
  return (
    <div className='my-4'>
      <div className='card w-96 glass'>
        <div className='my-4'>
          <CartTitle name={instructor?.name} />
        </div>
        <figure>
          <img
            className='w-full h-80 object-cover'
            src={instructor?.image}
            alt='instructor photo'
          />
        </figure>
        <div className='card-body'>
          <p className='flex items-center'>
            <HiOutlineMail className=' text-2xl text-gray-200' />
            &#160; Email: {instructor?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;