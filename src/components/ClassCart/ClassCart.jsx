import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useProvider from "../../hooks/useProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import Class from './../Class/Class';
import useStudent from "../../hooks/useStudent";

const ClassCart = ({ cart, refetch }) => {
  const [isStudent] = useStudent();
  const { user } = useProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const [bookingClass, setBookingClass] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/orderClass?email=${user?.email}&orderClassName=${cart?.className}`
      )
      .then((res) => {
        // console.log(res.data);
        setBookingClass(res.data.orderClassNameExists);
        // `orderClass?email=${user?.email}&orderClassName=${}`
      });
  }, [cart?.className, user?.email]);

  console.log(bookingClass);

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
        if (result.isConfirmed)
        {
           
          //  Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          navigate('/login', { state: { from: location } });
        }
      });
    } else {
      console.log(cart);
      const custormerInfo = {
        customerName: user?.displayName,
        customerEmail: user?.email,
        orderClassName: cart?.className,
        orderClassImpage: cart?.classImage,
        orderClassPrice: parseFloat(cart?.price),
        instructorName: cart?.instructorName,
        status: 'selected',
        classPrice: cart?.price,
        orderDate: new Date(),
      };
      console.log(custormerInfo);

      axios
        .post('http://localhost:5000/orderClass', custormerInfo)
        .then((res) => {
          console.log(res.data);
          if (res?.data?.insertedId)
          {
            refetch();
            console.log(custormerInfo);

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
    <div className='my-2 md:my-4 lg:my-8'>
      <div
        className={` py-2 md:my-6 lg:py-16 px-2 md:px-4 lg:px-8   ${
          cart?.availableSeat > 0 ? 'bg-base-200' : 'bg-red-700'
        }`}
      >
        <div className='  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-10 '>
          <div>
            <img
              src={cart.classImage}
              className='w-full rounded-lg shadow-2xl '
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold'>
              Class Name: {cart?.className}{' '}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 '>
              <div>
                <h3 className='text-2xl font-medium mt-6'>
                  {cart?.instructorName}{' '}
                </h3>
                <h3 className='text-2xl font-medium mt-6'>{cart?.email} </h3>
              </div>
              <div>
                <h3 className='text-2xl font-medium mt-6'>
                  Available Seat: {cart?.availableSeat}{' '}
                </h3>
                <h3 className='text-2xl font-medium mt-6'>
                  Price: $ {cart?.price}{' '}
                </h3>
              </div>
            </div>

            <div className='mt-2 md:mt-6 lg:mt-8'>
              {isStudent ? (
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
  );
};

export default ClassCart;