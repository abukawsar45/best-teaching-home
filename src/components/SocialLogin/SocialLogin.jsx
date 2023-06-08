import { useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProvider from '../../hooks/useProvider';
// import { AuthContext } from '../providers/AuthProvider';



const SocialLogin = () => {

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
  const {
    updateUserProfile,
    loginWithGoogle
  } = useProvider();

   const handleGoogleLogin = () => {
      loginWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(loggedUser.displayName,loggedUser.photoURL)
           const saveUser = {
             name: loggedUser.displayName,
             email: loggedUser.email,
          };
          navigate(from, {replace:true})
          
        })
        .catch((error) => {
          console.log(error);
        });
      }
   


  return (
    <div>
      <div className='text-center'>
        <button
          onClick={handleGoogleLogin}
          className='btn btn-outline group btn-info  '
        >
          <FcGoogle className='text-2xl mr-2' />{' '}
          <span className='text-yellow-300 group-hover:text-white'>
            Sign in With Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
