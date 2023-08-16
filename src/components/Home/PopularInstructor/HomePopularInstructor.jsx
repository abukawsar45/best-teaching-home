
import CartTitle from '../../../utilities/CartTitle/CartTitle';

const HomePopularInstructor = ({ instructor }) => {
  return (
    <div className='my-4 mx-4'>
      <div className='card w-96 relative'>
        {/* Image */}
        <figure>
          <img
            className='w-auto lg:w-full object-cover rounded-full relative'
            src={instructor?.image}
            alt='instructor photo'
          />
        </figure>
        <div>
          <a
            href='#' // Replace with the actual link you want
            className='btn-visit-link absolute bottom-24 left-4 bg-blue-500 text-white px-4 py-2 rounded-md transition-opacity opacity-0 hover:opacity-50'
          >
            Visit Link
          </a>
        </div>
        {/* Instructor Info */}
        <div className='my-4'>
          <CartTitle name={instructor?.name} />
        </div>

        {/* Visit Link Button (hidden by default) */}
      </div>
    </div>
  );
};

export default HomePopularInstructor;
