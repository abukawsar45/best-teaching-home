
import { ScaleLoader } from 'react-spinners';
import useProvider from '../hooks/useProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  
  const { user, loading } = useProvider();
  const location = useLocation();

  if (loading) {
    return(<div className='flex justify-center items-center h-96 '>
        <ScaleLoader color='#36d7b7' />
      </div>)
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};


export default PrivateRoute;