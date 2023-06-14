import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import ManageUserRow from '../ManageUserRow/ManageUserRow';
import useAdminForUsers from './../../../hooks/useAdminForUsers';

const ManageUser = () => {
  // const [allUser, setAllUser] = useState();
  const [allUsersData, refetch] = useAdminForUsers();
  ///console.log(allUsersData);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsersData?.map((userInfo, index) => (
              <ManageUserRow
                key={userInfo.image}
                index={index + 1}
                userInfo={userInfo}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
