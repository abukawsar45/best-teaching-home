import usePaidClass from "../../../hooks/usePaidClass";
import PaymentHistoryRow from "../../PaymentHistoryRow/PaymentHistoryRow";


const PaymentHistory = () => {
  const [paidClasses, refetch] = usePaidClass();
  console.log(paidClasses);
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Image</th>
            <th>Subject Name</th>
            <th>Price</th>
            <th>TnxID</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {paidClasses?.map((enrollClass, index) => (
            <PaymentHistoryRow
              key={enrollClass._id}
              index={index + 1}
              enrollClass={enrollClass}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;