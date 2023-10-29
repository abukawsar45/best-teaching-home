import { AiOutlineCheck } from 'react-icons/ai';

const CourseOverview = () => {
  return (
    <div
      data-aos='fade-up'
      className='my-4 py-6 bg-slate-600 hover:bg-slate-700'
    >
      <div>
        <h3 className='py-4 text-center font-semibold text-4xl  course-title'>
          Our Course Overview
        </h3>
      </div>
      <div className='md:flex justify-center text-gray-700 gap-5'>
        <div className='rounded-md bg-slate-50 py-6 mx-auto lg:mx-2 my-4 w-8/12 lg:w-4/12 shadow-md hover:bg-slate-300 border-transparent '>
          <div className='ml-3'>
            <h3 className='free px-4 py-1 text-xl'>FREE</h3>
            <div className='mt-4 mb-3'>
              <h4 className='text-xl text-red-700'>$0</h4>
              <p>/year for one or more people</p>
            </div>
            <p className='font-semibold'>Features you&quot;ll love: </p>
            <ul>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                240+ class
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                100 plus teachers
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                Time management
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                technology knowledge
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                test exam
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                give feedback and report conversation
              </li>
            </ul>
          </div>
        </div>
        <div className='rounded-md bg-slate-50 py-6 mx-auto lg:mx-2 my-4 w-8/12 lg:w-4/12 shadow-md border-t-4 border-green-500 hover:bg-slate-300 border-transparent hover:border-lime-300'>
          <div className='ml-3'>
            <h3 className='free px-4 py-1 bg-green-500 rounded-full text-center w-32 text-xl'>
              Premium
            </h3>
            <div className='mt-4 mb-3'>
              <h4 className='text-xl text-lime-700'>$100</h4>
              <p>/year for one or more people</p>
            </div>
            <p className='font-semibold'>Features you&quot;ll love: </p>
            <ul>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                400+ class
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                200 senior teachers
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />A flexible learning
                system that suits their schedule and needs
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />A quality online
                education focused on skill-building and socialization
              </li>
              <li className='flex items-center gap-1'>
                <AiOutlineCheck className='text-lime-700' />
                Award-winning curricula to uncover their unique interests and
                spark a passion for learning
              </li>
            </ul>
            <div className='my-4'>
              <button className='free px-4 py-2 bg-cyan-400 rounded-full text-center w-40 text-xl'>
                Unlock
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
