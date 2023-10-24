
import { HiOutlineMail } from 'react-icons/hi';
import CartTitle from '../../../utilities/CartTitle/CartTitle';

const HomePopularInstructor = ({ instructor }) => {
  console.log(instructor)
  return (
    <div className='my-0 mx-4 md:pb-28  lg:p-0 group'>
      <div className='card w-96 relative'>
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
                className='absolute  my-auto md:mx-auto p-0 md:p-0 w-60 md:w-72 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%] md:mb-[0%] md:group-hover:-mb-[95%] '
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

export default HomePopularInstructor;
