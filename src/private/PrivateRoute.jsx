import React from 'react';
import useProvider from '../hooks/useProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const location = useLocation();

  const { user, loading } = useProvider();

  if (loading) {
    return <progress className='progress w-56'></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};


export default PrivateRoute;