import { Navigate, useLocation } from "react-router-dom";
import useProvider from "../hooks/useProvider";
import { ScaleLoader } from 'react-spinners';
import useInstructor from "../hooks/useInstructor";


const InstructorSecure = ({ children }) => {
  const { user, loading } = useProvider();
  const [ isInstructor,isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructor) {
    return <ScaleLoader color='#36d7b7' />;
  }
  if (user && isInstructorLoading) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};


export default InstructorSecure;