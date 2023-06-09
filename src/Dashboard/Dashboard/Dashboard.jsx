import { Link } from "react-router-dom";
import useProvider from "../../hooks/useProvider";

const Dashboard = () => {
  const { user } = useProvider();
  console.log(user)
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          {user && (
            <>
              <li>
                <Link to='/'>My Selected Class</Link>
              </li>
              <li>
                <Link to='/'>My Enrolled Class</Link>
              </li>
              <li>
                <Link to='/'>Payment</Link>
              </li>
            </>
          )}

          <div className='divider'></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;