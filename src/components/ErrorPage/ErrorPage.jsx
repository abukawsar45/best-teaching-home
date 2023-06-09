import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Link to='/' className='my-4 mx-4 btn btn-info'>
        Home
      </Link>
      <div className="flex justify-center">
        <img src='https://i.ibb.co/1ZYVdV8/Taras-Migulko.gif' alt='' className="w-9/12 md:h-[500px] rounded-lg" />
      </div>
    </div>
  );
};

export default ErrorPage;