import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const ManageUser = () => {

  const [allUser, setAllUser] = useState();
  console.log(allUser)
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch }= useQuery(['allUsers'], async () => {
    const res = await axiosSecure.get('/allUser');
    return res.data
  } )

  useEffect(() => {
    axios.get('http://localhost:5000/allUser/').then(res => {
      console.log(res.data);
      setAllUser(res.data)
    })
  } ,[])

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
  }
  return (
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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/tailwind-css-component-profile-2@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className='text-sm opacity-50'>United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className='badge badge-ghost badge-sm'>
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
              </th>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default ManageUser;