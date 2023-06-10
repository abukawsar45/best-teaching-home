import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Instructor from "../components/Instructor/Instructor";
import Class from "../components/Class/Class";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import InstractorAddClass from "../Dashboard/InstractorAdd/InstractorAddClass";
import ManageUser from "../Dashboard/Dashboard/ManageUser/ManageUser";
import ManageClass from './../Dashboard/Dashboard/ManageClass/ManageClass';
import PrivateRoute from './../private/PrivateRoute';


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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/> </PrivateRoute>
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
        path: '/AddClass',
        element: <InstractorAddClass/>,
      },
      {
        path: '/manageUser',
        element: <ManageUser />,
      },
      {
        path: '/manageClass',
        element: <ManageClass />,
      },
    ],
  },
]);
export default router