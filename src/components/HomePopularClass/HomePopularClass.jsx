import { Link } from "react-router-dom";


const HomePopularClass = ({ popular }) => {
  console.log(popular);
  const { orderClassImpage, orderClassName, orderClassPrice } = popular;
  return (
    <>
      <div className='card w-96 bg-base-100 my-5 shadow-xl'>
        <figure className='mt-5'>
          <img src={orderClassImpage} alt='class image mt-5' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{orderClassName}!</h2>
          <p>Price: $ {orderClassPrice}</p>
          <div className='card-actions justify-end'>
            <Link to='/class' className='btn btn-primary w-full'>More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePopularClass;