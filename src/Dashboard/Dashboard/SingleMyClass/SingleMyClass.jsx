import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';

const SingleMyClass = ({ info}) => {
  console.log(info)
  return (
    <div className='bg-base-200 my-4 grid grid-cols-1 md:grid-cols-2'>
      <div className='hero-content'>
        <img
          src={info?.classImage}
          className='max-w-sm rounded-lg shadow-2xl'
        />
      </div>
      <div>
        <div className='pt-6 mr-4 flex flex-col lg:flex-row justify-between'>
          <div>
            <p className='py-1 text-xl font-mono'>
              Available Seat:{info?.availableSeat}
            </p>
            <p className='mt-4 text-xl'>Status: {info?.status}</p>
          </div>

          <div>
            <p className='py-1 text-xl font-mono'>Total Inroll : {0}</p>
            <p className='mt-4'>
              <Link to={`update/${info._id}`}>
                <AiFillEdit className='text-3xl text-green-400' />{' '}
              </Link>
            </p>
          </div>
        </div>
        <div className='mt-2'>
          {info.status === 'deny' && (
            <p className='py-1 text-xl'>
              {info.status === 'deny'
                ? 'Feedback: ' + (info.feedback ?? 'no feedback')
                : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMyClass;