import { SiHomeadvisor,  } from 'react-icons/si';
import { TfiPencilAlt } from 'react-icons/tfi';
import { TbHeartRateMonitor } from 'react-icons/tb';
const OurService = () => {
  return (
    <div className='bg-gray-600  hover:bg-gray-700'>
      <div>
        <h3 className='py-4 text-center font-semibold text-4xl  course-title'>
          Our Services
        </h3>
      </div>
      <div className='py-3 lg:py-6 lg:flex justify-center mx-3 md:mx-5 gap-4'>
        <div className='bg-slate-100  w-10/12 my-3 lg:md-5 py-5 hover:bg-slate-300 rounded-lg px-3'>
          <div className='my-4 flex justify-center'>
            <SiHomeadvisor className='text-3xl lg:text-9xl text-blue-700  ' />
          </div>
          <div>
            <h3 className='my-3 text-bold text-2xl font-extrabold text-emerald-400'>
              Online Homeschool
            </h3>
            <p className='text-pink-950 py-2 lg:py-4'>
              Supplement your child&quot;s homeschool education with
              challenging, engaging, and highly interactive our courses that
              speak to individual interests and help fill in knowledge gaps.
            </p>
          </div>
        </div>
        <div className='bg-slate-100  w-10/12 my-3 lg:md-5 py-5 hover:bg-slate-300 rounded-lg px-3'>
          <div className='my-4 flex justify-center'>
            <TfiPencilAlt className='text-3xl lg:text-9xl text-blue-700  ' />
          </div>
          <div>
            <h3 className='my-3 text-bold text-2xl font-extrabold text-emerald-400'>
              Individual Classes
            </h3>
            <p className='text-pink-950 py-2 lg:py-4'>
              Personalize your child&quot;s education with supplemental
              coursework. All individual classes are taught by K12 teachers and
              come with hands-on materials that help students catch up, get
              ahead, and explore their interests.
            </p>
          </div>
        </div>
        <div className='bg-slate-100  w-10/12 my-3 lg:md-5 py-5 hover:bg-slate-300 rounded-lg px-3'>
          <div className='my-4 flex justify-center'>
            <TbHeartRateMonitor className='text-3xl lg:text-9xl text-blue-700  ' />
          </div>
          <div>
            <h3 className='my-3 text-bold text-2xl font-extrabold text-emerald-400'>
              Tutoring Services
            </h3>
            <p className='text-pink-950 py-2 lg:py-4'>
              Support student success with flexible, dynamic tutoring from our
              state-certified teachers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
