import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
  path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home/>
    },
    
  ]
  }
])
export default router