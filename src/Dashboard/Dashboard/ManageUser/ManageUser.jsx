import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAdminForUsers from "../../../hooks/useAdminForUsers";
import ManageUserRow from "../ManageUserRow/ManageUserRow";


const ManageUser = () => {
  // const [allUser, setAllUser] = useState();
  const [allUsersData, refetch] = useAdminForUsers()
  console.log(allUsersData);
 


  const handleMakeAdmin = (user) => {
    axios
      .patch(`http://localhost:5000/students/admin/${user?._id}`)
      .then((data) => {
        console.log(data.data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Now ${user?.name} is Admin!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    // <>
    //   <h3>manage</h3>
    // </>
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allUsersData.map((userInfo,index)=><ManageUserRow key={userInfo._id} index={index+1} userInfo={userInfo} refetch={refetch} /> )
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;