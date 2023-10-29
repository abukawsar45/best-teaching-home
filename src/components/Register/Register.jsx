import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SocialLogin from '../SocialLogin/SocialLogin';
import useProvider from '../../hooks/useProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {
  const { logOut } = useProvider();
  const navigate = useNavigate();
  const { signUpWithEmail, updateUserProfile } = useProvider();

  ///console.log(signUpWithEmail);
  const [show, setShow] = useState(true);
  const [confirmShow, setConfirmShow] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSuccess('');
    setError('');

    if (data.password !== data.confirmPassword) {
      return setError('confirm password wrong');
    }

    signUpWithEmail(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        ///console.log(loggedUser);
        setError('');
        setSuccess('Registration Successfully');
        if (loggedUser) {
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const saveData = {
                name: data.name,
                image: data.photoURL,
                email: data.email,
                role: 'student',
                dete: new Date(),
              };
              axios
                .post(
                  'https://best-teaching-home-server-abukawsar45.vercel.app/students',
                  saveData
                )
                .then((res) => {
                  ///console.log(res.data);
                  if (res?.data?.insertedId) {
                    reset();
                    ///console.log(saveData);
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Registration Successful',
                      showConfirmButton: false,
                      timer: 1000,
                    });
                    logOut();
                    navigate('/login');
                  }
                  // navigate('/');
                });
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      })
      .catch((error) => {
        setSuccess('');
        setError(error.message);
      });
  };

  return (
    <div data-aos='fade-up' className='pt-16'>
      {' '}
      <div className=' min-h-screen bg-base-200'>
        <div className='hero-content flex-col md:flex-row md:justify-center'>
          <div className='mr-8'>
            <h1 className='text-5xl font-bold'>Registration Now</h1>
            <p className='py-6'>
              Safety First.Provide your information for safety.
            </p>
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
                  {errors.name && (
                    <span className='text-red-600'>This field is required</span>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    {...register('email', { required: true })}
                    className='input input-bordered'
                  />
                  {errors.email && (
                    <span className='text-red-600'>This field is required</span>
                  )}
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
                  {errors.password && (
                    <span className='text-red-600'>This field is required</span>
                  )}
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
                  {errors.confirmPassword && (
                    <span className='text-red-600'>This field is required</span>
                  )}
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
                    type='url'
                    placeholder='photo url'
                    {...register('photoURL', { required: true })}
                    className='input input-bordered'
                  />
                  {errors.photoURL && (
                    <span className='text-red-600'>This field is required</span>
                  )}
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
                  <input
                    type='submit'
                    value='Register'
                    className='btn submit btn-primary'
                  />
                </div>
              </div>
            </form>
            <div className='flex mb-6 flex-col w-full border-opacity-50'>
              <div className='divider'></div>
              <button>
                <SocialLogin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
