import { useEffect, useState } from 'react';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import ManageClassRow from './ManageClassRow/ManageClassRow';

  
const ManageClass = () => {
   
    const [allClass, setallClass] = useState();
    // console.log(allClass);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['allClasses'], async () => {
    const res = await axiosSecure.get('/allClass');
    return res.data;
  });


  useEffect(() => {
    axios.get('http://localhost:5000/allClass').then((res) => {
      console.log(res.data);
      setallClass(res.data);
    });
  }, []);


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
            { allClass?.map((singleClass) => (<ManageClassRow key={singleClass?._id}  singleClass={ singleClass } />
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageClass;