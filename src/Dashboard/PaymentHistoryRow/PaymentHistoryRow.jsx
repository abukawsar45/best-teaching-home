


const PaymentHistoryRow = ({ index, enrollClass }) => {
  const {
    orderClassImpage,
    orderClassName,
    orderClassPrice,
    tnxJID,
    paymentDate,
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
        <small> {orderClassName}</small>{' '}
      </th>
      <th>$: {orderClassPrice} </th>
      <th><small>{ tnxJID }</small>
      </th>
      <th>{paymentDate.split('T')[0]} </th>
    </tr>
  );
};

export default PaymentHistoryRow;