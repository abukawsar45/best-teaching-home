import date from 'date-and-time';

const Footer = () => {
  const now = new Date();

  const formattedDate = date.format(now, 'YYYY');

  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-2 text-center bg-neutral text-neutral-content'>
        <div className='bg-slate-600 p-10'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-current'
          ></svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className='p-10'>
          <span className='footer-title'>Social</span>
          <div className=''>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              ></svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              ></svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='footer footer-center p-4  bg-gray-800 text-white'>
        <div>
          <p>
            Copyright © {formattedDate} - All right reserved by ACME Industries
            Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
