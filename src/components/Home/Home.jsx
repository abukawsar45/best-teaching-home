import axios from 'axios';
import { useEffect, useState } from 'react';
import HomePopularClass from './../HomePopularClass/HomePopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
  const [popularData, setPopularData] = useState([]);
 const { result: popularDataClass, result2: popularDataInstructor } =
   popularData || {};

  // console.log(popularDataInstructor);
  console.log(popularData);
  // const { result, result2 } = popularData || [];
  // console.log(result);

  useEffect(() => {
    axios
      .get('https://best-teaching-home-server-abukawsar45.vercel.app/topclass')
      .then((res) => {
        // console.log(res.data)
        setPopularData(res.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-5xl text-center my-4 md:my-8'>
          Most Popular Class
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
          {popularDataClass?.slice(0, 6)?.map((popular) => (
            <HomePopularClass key={popular.classId} popular={popular} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-5xl text-center my-4 md:my-8'>
          Most Popular Instructor
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
          {popularDataInstructor?.slice(0, 6)?.map((instructor) => (
            <PopularInstructor key={instructor.classId} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
