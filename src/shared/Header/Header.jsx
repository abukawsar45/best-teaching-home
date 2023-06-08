import { Link } from "react-router-dom";
import useProvider from "../../hooks/useProvider";

const Header = () => {

  const {user, logOut } = useProvider();
  console.log(user)
   const handleLogOut = () => {
     logOut().then().catch();
   };

  const navOptions = (
    <>
      {' '}
      <li>
        {' '}
        <Link to='/'>Home</Link>
      </li>
      <li>
        {' '}
        <Link to='/instructor'>Instructor</Link>
      </li>
      <li>
        {' '}
        <Link to='/class'>Class</Link>
      </li>
      {user ? (
        <>
          {' '}
          <li>
            {' '}
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            {' '}
            <button onClick={handleLogOut} to='/'>Logout</button>
          </li>
        </>
      ) : (
        <>
          {' '}
          <li>
            {' '}
            <Link to='/login'>Login</Link>
          </li>
          <li>
            {' '}
            <Link to='/register'>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className='navbar bg-base-100'>
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
          <Link className='btn btn-ghost normal-case text-xl'>BTH</Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
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