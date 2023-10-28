import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { GiAlliedStar, GiCalendar } from 'react-icons/gi';
import { BsCalendarDay } from 'react-icons/bs';
import useAllClass from '../../hooks/useAllClass';
import RecommendedClass from '../RecommendedClass/RecommendedClass';
import useProvider from '../../hooks/useProvider';
import useStudent from '../../hooks/useStudent';
import Swal from 'sweetalert2';
import axios from 'axios';

const ClassDetails = () => {
  const [allClassdata, refetch] = useAllClass();
  const [getClassData, setGetClassData] = useState({});
    const {user, dark } = useProvider();
    const [isStudent] = useStudent();
    const navigate = useNavigate();
    const location = useLocation();
  // console.log(getClassData);
  const [withoutClass, setWithoutClass] = useState([]);

  const [bookingClass, setBookingClass] = useState(true);
    useEffect(() => {
      axios
        .get(
          `https://best-teaching-home-server-abukawsar45.vercel.app/orderClass?email=${user?.email}&orderClassName=${getClassData?.className}`
        )
        .then((res) => {
          // ///console.log(res.data);
          setBookingClass(res.data.orderClassNameExists);
          // `orderClass?email=${user?.email}&orderClassName=${}`
        });
    }, [getClassData?.className, user?.email]);

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

  const {
    availableSeat,
    classImage,
    className,
    date,
    email,
    feedback,
    instructorName,
    price,
    status,
    _id,
  } = getClassData || {};

  const { id: selectedId } = useParams();
  console.log(selectedId);

  useEffect(() => {
    setWithoutClass(true);
    const specificCard = allClassdata.find((card) => card?._id == selectedId);
    //  console.log(specificCard);
    setGetClassData(specificCard);
    const withoutSpecificCard = allClassdata.filter(
      (card) => card._id != selectedId
    );
    setWithoutClass(withoutSpecificCard);
    // console.log(withoutSpecificCard)
  }, [selectedId]);

  return (
    <div className='pt-20 md:pt-28 pb-6'>
      <div className=''>
        <div>
          <div className='grid  grid-cols-12 gap-3 md:gap-5 lg:gap-8'>
            <div className='col-span-12 md:col-span-5'>
              <div>
                <h3 className='text-4xl font-bold'>{className}</h3>
                <div className='flex flex-col gap-2 md:gap-4  my-3 md:my-6 lg:my-8 bg-gray-50 p-2 md:p-4 lg:p-6 shadow-lg shadow-slate-300 rounded-lg'>
                  <p className='text-2xl '>Instructor Name: {instructorName}</p>
                  <p className='text-2xl font-bold'>Fee: {price} </p>

                  <p className='text-xl'>AvailableSeat: {availableSeat}</p>
                  {
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
                              onClick={() => handleSelectButton(getClassData)}
                              className='btn w-full btn-primary'
                              disabled={getClassData?.availableSeat === 0}
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
                  }
                </div>
              </div>
            </div>
            <div className=' col-span-12 md:col-span-7'>
              <div>
                <img
                  src={classImage || 'https://i.ibb.co/5RMWQpJ/images-2.jpg'}
                  alt={classImage}
                  className='rounded-lg w-full'
                  onError={(e) => {
                    e.target.src = 'https://i.ibb.co/5RMWQpJ/images-2.jpg';
                  }}
                />
              </div>
            </div>
          </div>
          {/* recommended part */}
          <div className='my-4 md:my-8 lg:my-32'>
            <h3 className='text-4xl font-bold my-3 md:my-5 lg:my-8'>
              Recommended for you
            </h3>
            {/* <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8'>
              {allClassdata?.slice(0, 3)?.map((item) => (
                <RecommendedClass
                  key={item._id}
                  setSelectedClass={setSelectedCard}
                  selectedClass={selectedCard}
                  item={item}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
