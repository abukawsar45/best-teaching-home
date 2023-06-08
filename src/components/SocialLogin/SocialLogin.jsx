import { useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';


const SocialLogin = () => {

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const { loginWithGoogle } = useContext(AuthContext);

   const handleGoogleLogin = () => {
     loginWithGoogle()
       .then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
      //    const saveUser = {
      //      name: loggedUser.displayName,
      //      email: loggedUser.email,
      //    };
      //    fetch('http://localhost:4700/users', {
      //      method: 'POST',
      //      headers: {
      //        'content-type': 'application/json',
      //      },
      //      body: JSON.stringify(saveUser),
      //    })
      //      .then((res) => res.json())
      //      .then(() => {
      //        navigate(from, { repalce: true });
      //      });
       })
       .catch((error) => {
         console.log(error);
       });
   };


  return (
    <div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className='flex  btn btn-outline group btn-info  '
        >
          <FcGoogle className='text-2xl mr-2' />{' '}
          <span className='text-black group-hover:text-white'>
            Sign in With Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
