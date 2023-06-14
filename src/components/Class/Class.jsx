import ClassCart from '../ClassCart/ClassCart';
import useAllClass from '../../hooks/useAllClass';

const Class = () => {
  const [allClassdata, refetch] = useAllClass();

  // useEffect(() => {
  //   axios.get('https://best-teaching-home-server-abukawsar45.vercel.app/allClass/').then((res) => {
  //     ///console.log(res.data);
  //     setAllClass(res.data);
  //   });
  // }, []);

  ///console.log(allClassdata);

  return (
    <div>
      <div>
        <p className='text-2xl text-center my-4 text-sky-400'>
          All Classes Here: {allClassdata?.length}{' '}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
        {allClassdata?.map((cart) => (
          <ClassCart key={cart._id} cart={cart} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Class;
