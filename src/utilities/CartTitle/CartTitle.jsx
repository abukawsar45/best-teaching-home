import React from 'react';

const CartTitle = ({ name }) => {
  return (
    <div className='text-center my-2 md:my-4 '>
      <p className='font-thin text-2xl'>
        ~ <span className='text-green-400'>{name}</span> ~{' '}
      </p>
    
    </div>
  );
};

export default CartTitle;