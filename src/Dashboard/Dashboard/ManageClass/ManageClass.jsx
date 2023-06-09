import { useEffect, useState } from 'react';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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

const openModal = () => {
  const modal = document.getElementById('my_modal_4');
  if (modal) {
    modal.showModal();
  }
};

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table overflow-x-scroll'>
          {/* head */}
          <thead>
            <tr>
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
            {allClass?.map((singleClass) => (
              <tr key={singleClass._id} className='my-6'>
                <td>
                  <img
                    className='w-12 rounded'
                    src={singleClass?.classImage}
                    alt='class photo'
                  />
                </td>
                <td>{singleClass.className}</td>
                <td>{singleClass.instructorName}</td>
                <th>{singleClass.email}</th>
                <td>{singleClass.availableSeat}</td>
                <td>$: {singleClass.price}</td>
                <th>{singleClass.status}</th>
                <th className=''>
                  <button className='btn btn-success btn-xs'>Approve</button>{' '}
                  <button className='btn btn-warning btn-xs'>Deny</button>{' '}
                  {/* You can open the modal using ID.showModal() method */}
                  <button
                    className='btn'
                    onClick={openModal}
                  >
                    open modal
                  </button>
                  <dialog id='my_modal_4' className='modal'>
                    <form
                      method='dialog'
                      className='modal-box w-11/12 max-w-5xl'
                    >
                      <h3 className='font-bold text-lg'>Hello!</h3>
                      <p className='py-4'>Click the button below to close</p>
                      <div className='modal-action'>
                        {/* if there is a button, it will close the modal */}
                        <button className='btn'>Close</button>
                      </div>
                    </form>
                  </dialog>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageClass;