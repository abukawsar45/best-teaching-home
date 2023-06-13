

const MyEnrollClassRow = ({ index, enrollClass }) => {
  const {
    orderClassImpage,
    instructorName,
    orderClassPrice,
    orderClassName,
    status,
  } = enrollClass || {};
  
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

      <th>
        <small> {instructorName}</small>{' '}
      </th>
      <th>{orderClassName} </th>
      <th>$: {orderClassPrice} </th>
      <th>{status} </th>
    </tr>
  );
};

export default MyEnrollClassRow;