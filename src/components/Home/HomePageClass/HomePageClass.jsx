
import ClassCart from '../../ClassCart/ClassCart';
import useAllClass from '../../../hooks/useAllClass';
import { Link } from 'react-router-dom';

const HomePageClass = () => {
  const [allClassdata, refetch] = useAllClass();
  return (
    <div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
        {allClassdata?.slice(0, 12).map((cart) => (
          <ClassCart key={cart._id} cart={cart} refetch={refetch} />
        ))}
      </div>
      <div className='my-4 text-center'>
        <Link to='/class'>
          {allClassdata.length!=0 ?  <button className='text-center hover:text-amber-950 bg-emerald-400 hover:bg-emerald-500 rounded-full uppercase py-2 w-32'>
            see all{' '}
          </button> : ''}
        </Link>
      </div>
    </div>
  );
};

export default HomePageClass;