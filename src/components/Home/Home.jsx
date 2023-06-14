import axios from "axios";
import { useEffect, useState } from "react";
import HomePopularClass from './../HomePopularClass/HomePopularClass';


const Home = () => {
  const [popularData,setPopularData] = useState([])
  console.log(popularData)
  
  useEffect(() => {
    axios.get('http://localhost:5000/topclass').then(res => {
      // console.log(res.data)
      setPopularData(res.data)
    });
  },[])

  return (
    <div>
      
      <div>
        <h2 className="text-5xl text-center my-4 md:my-8">Most Popular Class</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
          {popularData.slice(0,6)?.map((popular) => (
            <HomePopularClass key={popular.classId} popular={popular} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;