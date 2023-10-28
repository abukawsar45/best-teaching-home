import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProvider from '../../hooks/useProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useStudent from '../../hooks/useStudent';
import { FaInfoCircle } from 'react-icons/fa';


const ClassCart = ({ cart, refetch }) => {
  const { dark } = useProvider();
  const [isStudent] = useStudent();
  const { user } = useProvider();
  const navigate = useNavigate();
  const location = useLocation();
  ///console.log({ cart });

  const [bookingClass, setBookingClass] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://best-teaching-home-server-abukawsar45.vercel.app/orderClass?email=${user?.email}&orderClassName=${cart?.className}`
      )
      .then((res) => {
        // ///console.log(res.data);
        setBookingClass(res.data.orderClassNameExists);
        // `orderClass?email=${user?.email}&orderClassName=${}`
      });
  }, [cart?.className, user?.email]);

  ///console.log(bookingClass);

  const handleSelectButton = (cart) => {
    if (!user) {
      Swal.fire({
        title: 'Please Login?',
        text: 'At first login,then select!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now',
      }).then((result) => {
        if (result.isConfirmed) {
          //  Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          navigate('/login', { state: { from: location } });
        }
      });
    } else {
      ///console.log(cart);
      const custormerInfo = {
        customerName: user?.displayName,
        customerEmail: user?.email,
        orderClassName: cart?.className,
        orderClassImpage: cart?.classImage,
        orderClassPrice: parseFloat(cart?.price),
        instructorName: cart?.instructorName,
        classId: cart?._id,
        status: 'selected',
        selectedDate: new Date(),
        classPrice: cart?.price,
        instructorEmail: cart?.email,
        instructorImage: cart?.instructorImage,
        // instructorImage:
      };
      ///console.log(custormerInfo);

      axios
        .post(
          'https://best-teaching-home-server-abukawsar45.vercel.app/orderClass',
          custormerInfo
        )
        .then((res) => {
          ///console.log(res.data);
          if (res?.data?.insertedId) {
            refetch();
            ///console.log(custormerInfo);

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Thanks for selecting',
              showConfirmButton: false,
              timer: 1000,
            });
            setBookingClass(true);
          }
        });
    }
  };

  return (
    <>
      <div
        className={`card relative w-96 my-2 md:my-6 lg:my-10  transition duration-300  ${
          dark ? 'bg-neutral-800 text-zinc-100' : 'bg-slate-50 text-slate-900'
        }`}
      >
        <div
          className={` card ${
            cart?.availableSeat > 0 ? '' : 'bg-red-700'
          } `}
        >
          <Link to={`/classDetails/${cart?._id}`}>
            <button className='group rounded-lg md:absolute -left-[2%] -top-[2%] bg-gradient-to-br from-[#0076CE] to-[#9400D3] p-2'>
              <FaInfoCircle className='text-4xl text-white group-hover:text-slate-300' />
            </button>
          </Link>
          <div className='mt-5 grid grid-cols-1'>
            <div>
              <figure>
                <img
                  src={cart?.classImage}
                  className='object-fill h-[200px] rounded-lg shadow-2xl '
                />
              </figure>
            </div>
            <div className='card-body'>
              <h1 className='font-bold'>Class Name: {cart?.className} </h1>
              <div className=' flex flex-col justify-end gap-6'>
                <div>
                  <h3 className='font-medium '>{cart?.instructorName} </h3>
                  <h3 className='font-medium '>{cart?.email} </h3>
                </div>
                <div>
                  <h3 className='font-medium '>
                    Available Seat: {cart?.availableSeat}{' '}
                  </h3>
                  <h3 className='font-medium '>Price: $ {cart?.price} </h3>
                </div>

                <div className=''>
                  {!user || isStudent ? (
                    bookingClass ? (
                      <>
                        {' '}
                        <button disabled className='btn w-full btn-primary'>
                          {' '}
                          Selected
                        </button>
                      </>
                    ) : (
                      <>
                        {' '}
                        <Link
                          onClick={() => handleSelectButton(cart)}
                          className='btn w-full btn-primary'
                          disabled={cart?.availableSeat === 0}
                        >
                          {' '}
                          Select
                        </Link>
                      </>
                    )
                  ) : (
                    <>
                      {' '}
                      <button disabled className='btn w-full btn-primary'>
                        {' '}
                        Selected
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className='mt-2 md:mt-6 lg:mt-8'>
                {/* {isStudent ||(
                <>
                  {' '}
                  <button disabled className='btn w-full btn-primary'>
                    {' '}
                    Selected
                  </button>
                </>
              ) } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCart;
