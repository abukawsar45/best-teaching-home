import { useEffect, useState } from "react"
import useClass from "../../hooks/useClass"
import axios from "axios";
import ClassCart from "../ClassCart/ClassCart";
import useAllClass from "../../hooks/useAllClass";

const Class = () => {
  const [allClassdata, refetch] = useAllClass();


    // useEffect(() => {
    //   axios.get('http://localhost:5000/allClass/').then((res) => {
    //     console.log(res.data);
    //     setAllClass(res.data);
    //   });
    // }, []);
  
  console.log(allClassdata);
  
  return (
    <div>
      <div>
        <p className='text-2xl text-center my-4 text-sky-400'>
          All Classes Here: {allClassdata?.length}{' '}
        </p>
      </div>
      <div>
        {allClassdata.map((cart) => (
          <ClassCart key={cart._id} cart={cart} refetch={refetch} />
        ))}
      </div>
    </div>
  );
}

export default Class