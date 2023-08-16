import useProvider from '../../hooks/useProvider';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logOut, dark, setDark } = useProvider();

  ///console.log(dark,user)
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navOptions = (
    <>
      {' '}
      <li>
        {' '}
        <ActiveLink to='/'>Home</ActiveLink>
      </li>
      <li>
        {' '}
        <ActiveLink to='/instructor'>Instructor</ActiveLink>
      </li>
      <li>
        {' '}
        <ActiveLink to='/class'>Class</ActiveLink>
      </li>
      {user ? (
        <>
          {' '}
          <li>
            {' '}
            <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
          </li>
          <li>
            {' '}
            <button onClick={handleLogOut} to='/'>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          {' '}
          <li>
            {' '}
            <ActiveLink to='/login'>Login</ActiveLink>
          </li>
          <li>
            {' '}
            <ActiveLink to='/register'>Register</ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=''>
      <div className='navbar max-w-screen-2xl lg:h-16 fixed z-50 text-white  bg-opacity-50 bg-base-100 xl:px-10 md:px-5 sm:px-2 px-1'>
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
          <button
            onClick={() => setDark(!dark)}
            className={`btn btn-outline ${
              dark ? 'bg-white text-black' : 'text-white bg-black'
            } mr-4`}
          >
            {dark ? <span> Dark</span> : <span>Light</span>}
          </button>
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
