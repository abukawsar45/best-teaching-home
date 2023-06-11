import useMySelectedClass from "../../hooks/useMySelectedClass";

const MySelectedClass = () => {
  const [selectedClass, refetch] = useMySelectedClass();
  console.log(selectedClass)
  return (
    <div>
      se cls
      
    </div>
  );
};

export default MySelectedClass;