import { useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProvider from '../../hooks/useProvider';
import axios from 'axios';
// import { AuthContext } from '../providers/AuthProvider';



const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  const {
    loginWithGoogle
  } = useProvider();

   const handleGoogleLogin = () => {
      loginWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
         
         
          if (loggedUser) {
           
      
                const saveData = {
                  name: loggedUser?.displayName,
                  image: loggedUser.photoURL,
                  email: loggedUser.email,
                  role: 'student',
                };
                axios
                  .post('http://localhost:5000/students', saveData)
                  .then((res) => {
                    console.log(res.data);
                    if (res?.data?.insertedId) {
                      //  reset();
                      console.log(saveData);
                      Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Registration Successful',
                        showConfirmButton: false,
                        timer: 1000,
                      });
                      //  navigate('/');
                    }
                     navigate(from, { replace: true });
                  });
          }
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
