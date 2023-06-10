import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useProvider from '../hooks/useProvider';
import { ScaleLoader } from 'react-spinners';

const AdminSecure = ({ children }) => {
  const { user, loading } = useProvider();
  const [isAdmin,isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <ScaleLoader color='#36d7b7' />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminSecure;
