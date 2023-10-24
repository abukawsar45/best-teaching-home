import useProvider from '../../hooks/useProvider';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';

const Header = () => {
  const { user, logOut, dark, setDark } = useProvider();
    const [isToggled, setIsToggled] = useState(false);


  ///console.log(dark,user)
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navOptions = (
    <>
      {' '}
      <li className='font-bold'>
        {' '}
        <ActiveLink to='/'>Home</ActiveLink>
      </li>
      <li className='font-bold'>
        {' '}
        <ActiveLink to='/instructor'>Instructor</ActiveLink>
      </li>
      <li className='font-bold'>
        {' '}
        <ActiveLink to='/class'>Class</ActiveLink>
      </li>
      {user ? (
        <>
          {' '}
          <li className='font-bold'>
            {' '}
            <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
          </li>
          <li className='font-bold'>
            {' '}
            <button onClick={handleLogOut} to='/'>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          {' '}
          <li className='font-bold'>
            {' '}
            <ActiveLink to='/login'>Login</ActiveLink>
          </li>
          <li className='font-bold'>
            {' '}
            <ActiveLink to='/register'>Register</ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=''>
      <div className='navbar max-w-screen-2xl lg:h-16 fixed z-50 text-white  bg-opacity-50 bg-base-100 xl:px-10 md:px-5 sm:px-2 px-1 transition-colors duration-300 ease-in bg-transparent  backdrop-blur-sm'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navOptions}
            </ul>
          </div>
          <img
            src='https://i.ibb.co/jGPdH9H/download.jpg'
            className='h-8 rounded'
            alt='Logo'
          />
          <Link className='btn btn-ghost normal-case text-xl'>
            Best Teaching Home
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          {/*  */}
          <div className='form-control mr-4'>
            <label className='label cursor-pointer'>
              <div className='mr-2'>
                <span className='label-text'>
                  {isToggled ? '' : <BsFillSunFill className='transition-transform duration-100 text-gray-300 text-2xl' />}{' '}
                </span>
                <span className='label-text'>
                  {isToggled ? <BsMoon className='transition-transform duration-100 text-white text-2xl' /> : ''}{' '}
                </span>
              </div>
              <input
                type='checkbox'
                className='toggle toggle-info'
                checked={isToggled}
                onClick={() => {
                  setIsToggled(!isToggled);
                  setDark(!dark);
                }}
              />
            </label>
          </div>
          {/*  */}

          {user && (
            <div className='avatar text-center w-10 online mr-2'>
              <div className='w-10 rounded-full'>
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
