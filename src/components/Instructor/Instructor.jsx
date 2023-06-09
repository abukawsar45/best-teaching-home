import axios from 'axios';
import { useEffect } from 'react';

const Instructor = () => {

axios
  .get('http://localhost:5000/students')
  .then((response) => {
    console.log(response.data);
    // Process the response data here
  })

  return (
    <div>
      Instructor
    </div>
  );
};

export default Instructor;