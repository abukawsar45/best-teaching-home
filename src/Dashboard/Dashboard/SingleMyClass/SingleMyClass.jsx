import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import useAxiosSecure from './../../../hooks/useAxiosSecure';

const SingleMyClass = ({ info, refetch }) => {
  console.log(info);
  const [axiosSecure] = useAxiosSecure();
  const [totalEnroll, setTotalEnroll] = useState([]);
  console.log(10000, { totalEnroll });

  useEffect(() => {
    /* https://best-teaching-home-server-abukawsar45.vercel.app/totalPaidClass/648313e1573f3dbfa036a344?orderClassName=Moktob%20Every%20Morning */
    axiosSecure
      .get(`/totalPaidClass/${info._id}?orderClassName=${info.className} `)
      .then((res) => {
        console.log(res.data);
        setTotalEnroll(res.data);
        refetch();
      });
  }, []);

  return (
    <div className='bg-base-200 my-4 grid grid-cols-1 md:grid-cols-2'>
      <div className='hero-content'>
        <img
          src={info?.classImage}
          className='max-w-sm rounded-lg shadow-2xl'
        />
      </div>
      <div>
        <div className='pt-6 mr-4'>
          <p className='py-1  font-mono'>Subject Name:{info?.className}</p>
          <p className='py-1  font-mono'>Total Enroll:{totalEnroll.length}</p>
          <p className='py-1  font-mono'>
            Available Seat : {info?.availableSeat}
          </p>
          <p className='mt-4 text-center bg-gray-500 px-4 py-2 rounded-md'>
            Status: {info?.status}
          </p>
          <p className='mt-4'>
            <Link
              to={`update/${info._id}`}
              className='text center btn btn-success w-full'
            >
              {' '}
              UPDATE
              <AiFillEdit className=' text-xl' />{' '}
            </Link>
          </p>
        </div>
        <div className='mt-2'>
          {info.feedback && <p className='py-1 '>Feedback: {info.feedback}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleMyClass;
