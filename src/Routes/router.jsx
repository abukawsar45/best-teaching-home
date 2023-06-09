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
import AllUser from "../Dashboard/Dashboard/AllUser/AllUser";

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
        element: <Dashboard />,
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
        path: '/allUsers',
        element: <AllUser />,
      },
    ],
  },
]);
export default router