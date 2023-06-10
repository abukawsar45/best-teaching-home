import { Outlet } from "react-router-dom";
import useProvider from "../../hooks/useProvider";
import useAdmin from "../../hooks/useAdmin";
import ActiveLink from './../../components/ActiveLink/ActiveLink';
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";

const Dashboard = () => {
  const { user } = useProvider();
  console.log(user)
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  const [isStudent] = useStudent()
  console.log('admin', isAdmin,'ins',isInstructor,'st',isStudent )
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
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          {isStudent && (
            <>
              <li>
                <ActiveLink to='/'>My Selected Class</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/'>My Enrolled Class</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/'>Payment</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/'>Payment History</ActiveLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <ActiveLink to='/'>Add a Class</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/'>My Classes</ActiveLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <ActiveLink to='/'>Manage Classes</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/'>Manage Users</ActiveLink>
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