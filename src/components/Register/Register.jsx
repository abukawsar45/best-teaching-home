import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
  const [show, setShow] = useState(true);
  const [confirmShow, setConfirmShow] = useState(true);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {' '}
      <div className=' min-h-screen bg-base-200'>
        <div className='hero-content flex-col md:flex-row md:justify-center'>
          <div className='mr-8'>
            <h1 className='text-5xl font-bold'>Registration Now</h1>
            <p className='py-6'>Provide your information for safety.</p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='text-center text-5xl font-bold mt-2'>
              Registration
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='name'
                    {...register('name', { required: true })}
                    className='input input-bordered'
                  />
                </div>
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
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                    })}
                    className='input input-bordered'
                  />
                  {errors.password?.type === 'minLength' && (
                    <span className='text-red-600'>
                      password must be 6 character
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className='text-red-600'>
                      password must have one uppercase,one special.
                    </span>
                  )}
                  <div
                    className='mr-auto ml-2 mt-2 block'
                    onClick={() => setShow(!show)}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                <div className='form-control '>
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    type={confirmShow ? 'password' : 'text'}
                    placeholder='confirm password'
                    {...register('confirmPassword', { required: true })}
                    className='input input-bordered'
                  />
                  <div
                    className='mr-auto ml-2 mt-2 block'
                    onClick={() => setConfirmShow(!confirmShow)}
                  >
                    {confirmShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Photo URL</span>
                  </label>
                  <input
                    type='text'
                    placeholder='photo url'
                    {...register('photoURL', { required: true })}
                    className='input input-bordered'
                  />
                </div>
                <div>
                  <p>
                    <small>
                      Already Register? &#160;
                      <span>
                        <Link className='text-blue-500' to='/login'>
                          Please Login
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
                  <button className='btn btn-primary'>Register</button>
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

export default Register;
