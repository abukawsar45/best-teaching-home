import { useParams } from "react-router-dom";
import useClass from "../../hooks/useClass";
import SingleMyClass from "../Dashboard/SingleMyClass/SingleMyClass";
import usePaidStudent from "../../hooks/usePaidStudent";


const MyClass = () => {
  const email = useParams();
  const [classes, refetch] = useClass();
  const [paidStudents] = usePaidStudent();
  console.log(usePaidStudent)
  
    // console.log(classes);
  return (
    <div className='mx-2'>
      <div className='flex justify-between'>
        <p className='text-green-400 font-bold text-3xl text-center my-4'>
          Total My student : {paidStudents?.length || 0}
        </p>
        <p className='text-green-400 font-bold text-3xl text-center my-4'>
          Total Subject : {classes?.length || 0}{' '}
        </p>
      </div>
      <div>
        {classes?.map((info) => (
          <SingleMyClass key={info._id} info={info} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyClass;