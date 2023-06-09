import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const AllUser = () => {

  const [allUser, setAllUser] = useState();
  console.log(allUser)
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch }= useQuery(['allUsers'], async () => {
    const res = await axiosSecure.get('/allUser');
    return res.data
  } )

  useEffect(() => {
    axios.get('http://localhost:5000/allUser/').then(res => {
      console.log(res.data);
      setAllUser(res.data)
    })
  } ,[])

  const handleMakeAdmin = (user) => {
    axios
      .patch(`http://localhost:5000/students/admin/${user?._id}`)
      .then((data) => {
        console.log(data.data);
         if (data.modifiedCount) {
           refetch();
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: `Now ${user?.name} is Admin!`,
             showConfirmButton: false,
             timer: 1000,
           });
         }
        
      });
  }
  return (
    <div>
      
    </div>
  );
};

export default AllUser;