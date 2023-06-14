import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useProvider from '../../../hooks/useProvider';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const ManageUserRow = ({ userInfo, index, refetch }) => {
  const { user } = useProvider();
  ///console.log(userInfo)
  const [axiosSecure] = useAxiosSecure();
  const { _id, name, image, email, role } = userInfo || {};
  const handleMakeRole = (userData, power) => {
    const updateRole = { power };
    ///console.log(power,'----',updateRole)
    axiosSecure
      .patch(`/students/role/${userData?._id}?email=${user?.email}`, updateRole)
      .then((data) => {
        ///console.log(data.data);
        if (data?.data?.modifiedCount > 0) {
          ///console.log('2222');
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Now ${userData?.name} is now ${power}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr className='text-center'>
      <td>{index}</td>
      <td>
        <div>
          <img className='rounded w-12' src={image} alt='class photo' />
        </div>
      </td>
      <td>{name}</td>
      <th>{role}</th>
      <th>
        <span className='flex flex-col  mx-auto w-20'>
          {
            <>
              {' '}
              <button
                disabled={role === 'admin'}
                onClick={() => handleMakeRole(userInfo, 'admin')}
                className='btn btn-success btn-xs mt-2'
              >
                Admin
              </button>{' '}
              <button
                disabled={role === 'instructor'}
                onClick={() => handleMakeRole(userInfo, 'instructor')}
                className='btn btn-warning btn-xs mt-2'
              >
                Instructor
              </button>{' '}
            </>
          }
        </span>
      </th>
      <th className='mx-auto'>
        <button className='btn btn-active btn-error'>
          <RiDeleteBin6Fill className='text-xl' />
        </button>{' '}
      </th>
    </tr>
  );
};

export default ManageUserRow;
