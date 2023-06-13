import { Outlet } from "react-router-dom";
import useProvider from "../../hooks/useProvider";
import useAdmin from "../../hooks/useAdmin";
import ActiveLink from './../../components/ActiveLink/ActiveLink';
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";
import { BiSelectMultiple } from 'react-icons/bi';
import {
  MdPaid,
  MdPayments,
  MdOutlineManageHistory,
  MdManageAccounts,
} from 'react-icons/md';
import { GiEntryDoor } from 'react-icons/gi';

import { BsJournalPlus, BsReverseListColumnsReverse } from 'react-icons/bs';
// import { FaUsersGear } from 'react-icons/fa6';
// import { FaUsersGear } from 'react-icons/fa6';






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
    <div className='drawer-content flex flex-col '>
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
              <ActiveLink className='w-full' to='mySelectedClass'>
                <span className='block w-64 flex items-center'>
                  <BiSelectMultiple className='text-xl mr-2' /> My Selected
                  Class
                </span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className='w-full' to='myEnrollClass'>
                <span className='block w-64 flex items-center'>
                  <GiEntryDoor className='text-xl mr-2' /> My Enrolled Class
                </span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className='w-full' to='paymentHistory'>
                <span className='block w-64 flex items-center'>
                  <MdPayments className=' text-xl mr-2' /> Payment History
                </span>
              </ActiveLink>
            </li>
          </>
        )}
        {isInstructor && (
          <>
            <li>
              <ActiveLink className='w-full' to='addClass'>
                <span className='block w-64 flex items-center'>
                  <BsJournalPlus className=' text-xl mr-2' /> Add a Class
                </span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className='w-full' to={`myclass/${user?.email}`}>
                <span className='block w-64 flex items-center'>
                  <BsReverseListColumnsReverse className=' text-xl mr-2' /> My
                  Classes
                </span>
              </ActiveLink>
            </li>
          </>
        )}
        {isAdmin && (
          <>
            <li>
              <ActiveLink className='w-full' to='manageClass'>
                <span className='block w-64 flex items-center'>
                  <MdOutlineManageHistory className=' text-xl mr-2' />
                  Manage Classes
                </span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className='w-full' to='manageUser'>
                <span className='block w-64 flex items-center'>
                  <MdManageAccounts className=' text-xl mr-2' />
                  Manage Users
                </span>
              </ActiveLink>
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