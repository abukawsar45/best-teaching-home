import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Instructor from "../components/Instructor/Instructor";
import Class from "../components/Class/Class";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ManageUser from "../Dashboard/Dashboard/ManageUser/ManageUser";
import ManageClass from './../Dashboard/Dashboard/ManageClass/ManageClass';
import PrivateRoute from './../private/PrivateRoute';
import InstractorAddClass from './../Dashboard/InstractorAdd/InstractorAddClass';
import MyClass from "../Dashboard/MyClass/MyClass";
import UpdateClass from "../Dashboard/Dashboard/UpdateClass/UpdateClass";
import MySelectedClass from './../Dashboard/MySelectedClass/MySelectedClass';
import MyEnrollClass from "../Dashboard/Dashboard/MyEnrollClass/MyEnrollClass";
import Payment from "../Dashboard/Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/Dashboard/PaymentHistory/PaymentHistory";
import AdminSecure from "../private/AdminSecure";
import InstructorSecure from './../private/InstructorSecure';
import DashboardHome from "../Dashboard/Dashboard/DashboardHome/DashboardHome";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/instructor',
        element: <Instructor />,
      },
      {
        path: '/class',
        element: <Class />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />{' '}
          </PrivateRoute>
        ),
        children: [
          {
            path: 'addClass',
            element: (
              <InstructorSecure>
                <InstractorAddClass />
              </InstructorSecure>
            ),
          },
          {
            path: 'myclass/:email/update/:id',
            element: (
              <InstructorSecure>
                <UpdateClass />
              </InstructorSecure>
            ),
          },
          {
            path: 'myclass/:email',
            element: (
              <InstructorSecure>
                <MyClass />
              </InstructorSecure>
            ),
          },

          {
            path: 'dashboardHome', // Corrected path
            element: <DashboardHome />,
          },
          {
            path: 'manageUser', // Corrected path
            element: (
              <AdminSecure>
                {' '}
                <ManageUser />
              </AdminSecure>
            ),
          },
          {
            path: 'manageClass', // Corrected path
            element: (
              <AdminSecure>
                <ManageClass />
              </AdminSecure>
            ),
          },
          {
            path: 'mySelectedClass', // Corrected path
            element: (
              <PrivateRoute>
                {' '}
                <MySelectedClass />
              </PrivateRoute>
            ),
          },
          {
            path: 'myEnrollClass', // Corrected path
            element: (
              <PrivateRoute>
                <MyEnrollClass />
              </PrivateRoute>
            ),
          },
          {
            path: 'paymentHistory', // Corrected path
            element: (
              <PrivateRoute>
                <PaymentHistory />
              </PrivateRoute>
            ),
          },
          {
            path: 'mySelectedClass/payment', // Corrected path
            element: (
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router