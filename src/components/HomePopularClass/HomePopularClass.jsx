

const HomePopularClass = ({ popular }) => {
  ///console.log(popular);
  const { orderClassImage, orderClassName, orderClassPrice, count } = popular;
  return (
    <>
      <div className='card w-96 bg-base-100 my-5 shadow-xl'>
        <figure className='mt-5'>
          <img src={orderClassImage} alt='class' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{orderClassName}!</h2>
          <p>Price: $ {orderClassPrice}</p>
          <p>Total Enroll: {count}</p>
          {/* <div className='card-actions justify-end'>
            <Link
              to='/class'
              className='text-center hover:text-amber-950 bg-emerald-400 hover:bg-emerald-500 rounded-full uppercase py-2 w-full'
            >
              More
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePopularClass;
