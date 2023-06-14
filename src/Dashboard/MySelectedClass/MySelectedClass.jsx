import useMySelectedClass from "../../hooks/useMySelectedClass";
import MySelectedClassRow from "../MySelectedClassRow/MySelectedClassRow";

const MySelectedClass = () => {
  const [selectedClass, refetch] = useMySelectedClass();
  console.log(selectedClass)
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className="text-center">
            
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
            <th>PAY</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {selectedClass?.map((singleClass, index) => (
            <MySelectedClassRow
              key={singleClass._id}
              index={index + 1}
              singleClass={singleClass}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySelectedClass;