import usePaidClass from '../../../hooks/usePaidClass';
import MyEnrollClassRow from '../../MyEnrollClassRow/MyEnrollClassRow';

const MyEnrollClass = () => {
  const [paidClasses, refetch] = usePaidClass();
  ///console.log(paidClasses);
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Image</th>
            <th>Instructor Name</th>
            <th>Class Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {paidClasses?.map((enrollClass, index) => (
            <MyEnrollClassRow
              key={enrollClass._id}
              index={index + 1}
              enrollClass={enrollClass}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrollClass;
