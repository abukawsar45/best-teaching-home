import { useEffect, useState } from "react"
import useClass from "../../hooks/useClass"
import axios from "axios";
import ClassCart from "../ClassCart/ClassCart";

const Class = () => {
  const [allClass, setAllClass] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/allClass/').then((res) => {
        console.log(res.data);
        setAllClass(res.data);
      });
    }, []);
  
  console.log(allClass);
  
  return (
    <div>
      <div>
        <p className="text-2xl text-center my-4 text-sky-400">All Classes Here: {allClass?.length} </p>
      </div>
      <div>

        {
          allClass.map((cart => <ClassCart key={ cart._id } cart={ cart }/> ))
        }
      </div>
    </div>
  )
}

export default Class