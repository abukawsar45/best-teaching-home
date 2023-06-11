import axios from 'axios';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MySelectedClassRow = ({ index, singleClass, refetch }) => {
  console.log(singleClass);
  const { orderClassImpage, orderClassName, classPrice } = singleClass;

  const handleDeletButton = (singleClass) => {
    console.log(singleClass);
    // orderClass
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/selectedClass/${singleClass?._id}`)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.deletedCount > 0)
            {
              refetch();
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  /* axios.delete(`https://bistro-boss-server-fawn.vercel.app/carts/${item._id}`)
  .then(response => {
    const data = response.data;
    if (data.deletedCount > 0) {
      refetch();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }
  }) */

  return (
    <tr className='my-1 text-center'>
      <th>{index} </th>
      <td className='h-12 w-20'>
        <img
          className='rounded'
          src={orderClassImpage}
          alt='w-[4rem] class photo'
        />
      </td>

      <th>{orderClassName} </th>
      <th>$: {classPrice} </th>
      <th className='mx-auto'>
        <button
          onClick={() => handleDeletButton(singleClass)}
          className='btn btn-active btn-error'
        >
          <RiDeleteBin6Fill className='text-xl' />
        </button>{' '}
      </th>
      <th className='text-center'>
        <button className='btn btn-active btn-warning'>PAY</button>{' '}
      </th>
    </tr>
  );
};

export default MySelectedClassRow;
