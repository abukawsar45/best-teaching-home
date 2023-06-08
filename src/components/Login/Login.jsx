import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SocialLogin from '../SocialLogin/SocialLogin';
import useProvider from '../../hooks/useProvider';

const Login = () => {
  const [show, setShow] = useState(true)
  const [success, setSuccess] = useState('');
  const [error,setError] = useState('');
  const {
    loginWithEmail,
  } = useProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginWithEmail(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        setSuccess('Login Successfully');
        if (loggedUser) {
         
          console.log('login===39');
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setSuccess('');
        setError(error.message);
      });
  };

  return (
    <div>
      <div className='min-h-screen bg-base-200'>
        <div className='hero-content flex-col md:flex-row md:justify-center'>
          <div className='mr-8'>
            <h1 className='text-5xl font-bold'>Login Now</h1>
            <p className='py-6'>Provide your information for safety.</p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='text-center text-5xl font-bold mt-2'>Login</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='text'
                    placeholder='email'
                    {...register('email', { required: true })}
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control '>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type={show ? 'password' : 'text'}
                    placeholder='password'
                    {...register('password', { required: true })}
                    className='input input-bordered'
                  />
                  <button className='mr-auto ml-2 mt-2 block' onClick={() => setShow(!show)}>
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <div>
                  <p>
                    <small>
                      No Accout? &#160;
                      <span>
                        <Link className='text-blue-500' to='/register'>
                          Create a new
                        </Link>
                      </span>
                    </small>
                  </p>
                </div>
                <div>
                  <p className='text-green-400'>{success && success}</p>
                  <p className='text-red-600'>{error && error}</p>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Login</button>
                </div>
                <div className='flex flex-col w-full border-opacity-50'>
                  <div className='divider'></div>
                  <button>
                    
                    <SocialLogin />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;