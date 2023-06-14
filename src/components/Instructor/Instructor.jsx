import axios from 'axios';
import { useEffect, useState } from 'react';
import InstructorCart from './InstructorCart/InstructorCart';

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://best-teaching-home-server-abukawsar45.vercel.app/students/instructor'
      )
      .then((res) => {
        console.log(res.data);
        setInstructors(res.data);
        // Process the response data here
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      Instructor
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {instructors?.map((instructor) => (
          <InstructorCart key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
