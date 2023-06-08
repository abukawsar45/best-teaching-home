import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Instructor from "../components/Instructor/Instructor";
import Class from "../components/Class/Class";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
        element: <Dashboard/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
    ],
  },
]);
export default router