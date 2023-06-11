import { Link } from "react-router-dom";

const ClassCart = ({cart}) => {
  return (
    <div className='my-2 md:my-4 lg:my-8'>
      <div className={`hero   ${(cart?.availableSeat > 0)?'bg-base-200':'bg-red-700'}`}>
        <div className='hero-content grid grid-cols-1 md:grid-cols-2 '>
          <div>
             <img
            src={cart.classImage}
            className='max-w-sm rounded-lg shadow-2xl'
          />
         </div>
          <div>
            <h1 className='text-5xl font-bold'>{cart?.className} </h1>
            <h3 className='text-2xl font-medium mt-2'>
              {cart?.instructorName}{' '}
            </h3>
            <h3 className='text-2xl font-medium mt-2'>
              Available Seat: {cart?.availableSeat}{' '}
            </h3>
            <h3 className='text-2xl font-medium mt-2'>
              Price: $ {cart?.price}{' '}
            </h3>

            <Link className='btn btn-primary'>Select</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCart;