import axios from 'axios';
import { useEffect, useState } from 'react';
import HomePopularClass from './../HomePopularClass/HomePopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
// import HomePageSlider from '../HomePageSlider/HomePageSlider';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Home.css';

// import required modules
import { Scrollbar } from 'swiper';
import HomePopularInstructor from './PopularInstructor/HomePopularInstructor';
import Comment from './Comment/Comment';
import Class from './../Class/Class';
import HomePageClass from './HomePageClass/HomePageClass';
import OurService from './OurService/OurService';
import CourseOverview from './CourseOverview';

const Home = () => {
  const [popularData, setPopularData] = useState([]);
  const { result: popularDataClass, result2: popularDataInstructor } =
    popularData || {};

  // ///console.log(popularDataInstructor);
  ///console.log(popularData);
  // const { result, result2 } = popularData || [];
  // ///console.log(result);

  useEffect(() => {
    axios
      .get('https://best-teaching-home-server-abukawsar45.vercel.app/topclass')
      .then((res) => {
        // ///console.log(res.data)
        setPopularData(res.data);
      });
  }, []);

  return (
    <div className='pt-16'>
      <div className='w-full h-[200px] md:h-[400px] lg:h-[600px] relative '>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className='mySwiper'
        >
          {popularDataClass?.map((popData) => (
            <SwiperSlide key={popData.classId}>
              <img
                src={popData.orderClassImage}
                alt=''
                className='bg-opacity-60 bg-slate-600'
              />
              <div className='absolute text-center bg-opacity-60 bg-slate-600 py-40'>
                <h4 className='  text-xl md:text-3xl lg:text-9xl  font-bold'>
                  Most Popular Class in Here
                </h4>
                <p className='w-3/4 mx-auto text-green-400'>
                  <small>
                    Death is seen not as the termination of life, rather the
                    continuation of life in another form. In Islamic belief, God
                    has made this worldly life as a test and a preparation
                    ground for the afterlife; and with death, this worldly life
                    comes to an end
                  </small>
                </p>
              </div>
            </SwiperSlide>
            // <HomePageSlider key={ popData.classId } popData={ popData } />)
          ))}
        </Swiper>
      </div>
      {/* Popular Class */}
      <div>
        <h2 className='text-5xl text-center my-4 md:my-8'>
          <div className='my-2 border-2 border-y-2 border-lime-400'></div>
          Most Popular Class
          <div className='my-2 border-2 border-y-2 border-lime-400'></div>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
          {popularDataClass?.slice(0, 3)?.map((popular) => (
            <HomePopularClass key={popular.classId} popular={popular} />
          ))}
        </div>
      </div>
      {/* popular Instructor */}
      <div>
        <h2 className='text-5xl text-center my-4 md:my-8'>
          <div className='my-2 border-2 border-y-2 border-lime-400'></div>
          Most Popular Instructor
          <div className='my-2 border-2 border-y-2 border-lime-400'></div>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'>
          {popularDataInstructor?.slice(0, 3)?.map((instructor) => (
            <HomePopularInstructor
              key={instructor.classId+'a'}
              instructor={instructor}
            />
          ))}
        </div>
      </div>
      <div className='my-2 border-2 border-y-2 border-lime-400'></div>
      <HomePageClass/>
      <div className='my-2 border-2 border-y-2 border-lime-400'></div>
      {/* comment part */ }
      <OurService />
      <div className='my-2 border-2 border-y-2 border-lime-400'></div>
      <CourseOverview/>
      <div className='my-2 border-2 border-y-2 border-lime-400'></div>
      <Comment />
    </div>
  );
};

export default Home;
