
import ManageClassRow from '../../ManageClassRow/ManageClassRow';
import useAdminCheck from '../../../hooks/useAdminCheck';

  
const ManageClass = () => {

  const [allClassData, refetch] = useAdminCheck();

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table overflow-x-scroll'>
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>Photo</th>
              <th>Name</th>
              <th>Ins Name</th>
              <th>Ins Email</th>
              <th>Availaable seat</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClassData?.map((singleClass) => (
              <ManageClassRow
                key={singleClass?._id}
                refetch={refetch}
                singleClass={singleClass}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageClass;