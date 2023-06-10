import { useEffect, useState } from "react"
import useClass from "../../hooks/useClass"
import axios from "axios";

const Class = () => {
  const [allClass, setAllClass] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/allClass/').then((res) => {
        console.log(res.data);
        setAllClass(res.data);
      });
    }, []);
  
  console.log(allClass);
  
  useEffect(() => {
    
  } ,[])
  return (
    <div>Class</div>
  )
}

export default Class