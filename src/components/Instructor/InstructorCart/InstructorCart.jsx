import CartTitle from '../../../utilities/CartTitle/CartTitle';
import { HiOutlineMail } from 'react-icons/hi';

const InstructorCart = ({ instructor }) => {
  return (
    <div className='my-4 group'>
      <div className='md:hidden card w-96 mx-4 glass'>
        <div className=''>
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
          <p className=' my-2'>
            {instructor?.name} is a Bangladeshi Islamic scholar, media
            personality, professor, writer, preacher and Islamic speaker.
          </p>
          <p className='flex items-center'>
            <HiOutlineMail className=' text-2xl text-gray-200' />
            &#160; Email: {instructor?.email}
          </p>
        </div>
      </div>
      {/* medium or large device */}
      <div className='hidden md:block w-96 relative'>
        {/* Image */}
        <div className=' mt-4 md:mx-auto py-4 px-2  '>
          <div className='md:hidden'>
            <h5 className='mt-2 text-xl font-semibold'>{instructor?.name} </h5>
          </div>
          <div className='relative md:flex flex-col justify-start  md:justify-center items-center  h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]  md:mx-auto  z-10 md:bg-pink-800 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
            <div
              className={`absolute text-white  opacity-0 p-2 md:p-6 lg:p-12    md:group-hover:opacity-100 transition-opacity duration-300`}
            >
              <CartTitle name={instructor?.name} />
              <p className='my-2'>
                {instructor?.name} is a Bangladeshi Islamic scholar, media
                personality, professor, writer, preacher and Islamic speaker.
              </p>
              <p className='flex items-center text-blue-500 mt-2 md:mt-4'>
                <HiOutlineMail className=' text-2xl ' />
                &#160; Email: {instructor?.email}
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <img
                className='absolute  my-auto md:mx-auto p-0 md:p-0 w-60 md:w-72 md:group-hover:w-24 h-auto object-fit ease-in-out duration-500 rounded-full  mb-[-90%] md:mb-[0%] md:group-hover:-mb-[95%] '
                src={instructor?.image}
                alt={instructor?.image}
              />
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
              <CartTitle name={instructor?.name} />
            </div>
            {/*  */}

            {/*  */}
          </div>
          <div className='md:hidden'>
            <p className=' my-2'>
              {instructor?.name} is a Bangladeshi Islamic scholar, media
              personality, professor, writer, preacher and Islamic speaker.
            </p>
          </div>
        </div>
        {/* Instructor Info */}

        {/* Visit Link Button (hidden by default) */}
      </div>
    </div>
  );
};

export default InstructorCart;
