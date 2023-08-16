import Swal from 'sweetalert2';
import './Comment.css'

const Comment = () => {

  const handleAddReview = (e) => {
    e.preventDefault(); // Corrected spelling
    console.log('first');
     Swal.fire('Thanks for your comment', 'Sent successfully', 'success');
  };


  return (
    <div className='bg-lime-700 hover:bg-lime-800 my-6'>
      <div className='py-4 md:py-5'>
        <h2 className='text-center text-3xl font-semibold comment-title'>
          Add a Comment
        </h2>
      </div>
      <div className='grid grid-cols-12 py-5 lg:py-8'>
        <div className='col-span-12 lg:col-span-8 px-4 lg:px-6'>
          <form onSubmit={handleAddReview} action=''>
            <div className='md:flex justify-between'>
              <div className='mb-4'>
                <label className='input-group'>
                  <span>Name</span>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='input input-bordered  w-full'
                  />
                </label>
              </div>
              <div className='mb-4'>
                <label className='input-group'>
                  <span>Email</span>
                  <input
                    type='email'
                    placeholder='abc@gmail.com'
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
            </div>
            <div>
              <div className='my-4'>
                <label className='input-group'>
                  <span>Comment</span>
                  <textarea
                    type='text'
                    placeholder='type here'
                    className='textarea  w-full'
                  />
                </label>
              </div>
            </div>
            <div className='px-4'>
              <button
                type='submit'
                className='bg-blue-400 py-3 hover:bg-blue-500 rounded-full w-full'
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
        <div className='col-span-12 lg:col-span-4 my-5 lg:my-0 mx-4'>
          <div>
            <h5 className='font-semibold'>Please do not post:</h5>
            <>
              <li>Aggressive or discriminatory language</li>
              <li>Profanities (of any kind)</li>
              <li>Trade secrets or confidential information</li>
            </>
            <p className='my-4 lg:my-6'>
              Thank you once again for doing your part to keep Edarabia the most
              trusted education source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;