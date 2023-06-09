import React from 'react';

const CartTitle = ({ name }) => {
  return (
    <div className='text-center'>
      <p className='font-thin text-2xl'>
        ~ <span className='text-green-400'>{name}</span> ~{' '}
      </p>
    
    </div>
  );
};

export default CartTitle;