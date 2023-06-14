import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ManageClassRow = ({ singleClass, refetch }) => {
  const handleClassStatus = (id, status) => {
    console.log(id, status);
    axios
      .patch(
        `https://best-teaching-home-server-abukawsar45.vercel.app/classesStatus/${id}?status=${status}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) refetch();
        {
          Swal.fire('Class Updated Successfully', 'Saved', 'success');
          // form.reset();
        }
      });
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('2999', data);
    axios
      .put(
        `https://best-teaching-home-server-abukawsar45.vercel.app/feedback/${singleClass._id}`,
        data
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          reset();
          closeModal();
          Swal.fire('Send Feedback Successful', 'Saved', 'success');
        }
      });
  };

  const openModal = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal) {
      modal.showModal();
    }
  };
  const closeModal = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal) {
      modal.close();
    }
  };
  return (
    <tr className='my-1 text-center'>
      <td>
        <img
          className='rounded'
          src={singleClass?.classImage}
          alt='class photo'
        />
      </td>
      <td>{singleClass?.className}</td>
      <td>{singleClass?.instructorName}</td>
      <th>{singleClass?.email}</th>
      <td>{singleClass?.availableSeat}</td>
      <td>$: {singleClass?.price}</td>
      <th>{singleClass?.status}</th>
      <th className='text-center'>
        <div>
          {singleClass.status === 'pending' ? (
            <>
              {' '}
              <button
                onClick={() => handleClassStatus(singleClass._id, 'approve')}
                className='btn btn-success btn-xs mt-2'
              >
                Approve
              </button>{' '}
              <button
                onClick={() => handleClassStatus(singleClass._id, 'deny')}
                className='btn btn-warning btn-xs mt-2'
              >
                Deny
              </button>{' '}
            </>
          ) : (
            <>
              {' '}
              <button disabled={true} className='btn btn-success btn-xs mt-2'>
                Approve
              </button>{' '}
              <button disabled={true} className='btn btn-warning btn-xs mt-2'>
                Deny
              </button>{' '}
            </>
          )}
        </div>
        {/* You can open the modal using ID.showModal() method */}
        <button
          // disabled={
          //   singleClass.status === 'pending' || singleClass.status === 'approved'
          // }
          className='btn mt-2'
          onClick={openModal}
        >
          feedback
        </button>
        <dialog id='my_modal_4' className='modal '>
          <div className='modal-action relative'>
            <form
              method='dialog'
              className='modal-box w-11/12 max-w-5xl'
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className='font-bold text-lg'>Optional!</h3>
              <textarea
                placeholder='type your feedback'
                {...register('feedback', { required: true })}
                className='textarea text-gray-100 textarea-bordered textarea-lg w-full max-w-xs'
              ></textarea>{' '}
              {errors.feedback && (
                <span className='text-red-600'>This field is required</span>
              )}
              {/* if there is a button, it will close the modal */}
              <input
                type='submit'
                value='SEND FEEDBACK'
                className='btn submit btn-primary'
              />
            </form>
            <button
              type='button'
              onClick={closeModal}
              className='btn absolute mr-5 mt-0 bg-red-500 text-white'
            >
              X
            </button>
          </div>
        </dialog>
      </th>
    </tr>
  );
};

export default ManageClassRow;
