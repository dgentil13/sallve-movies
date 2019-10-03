import React from 'react';

const Error = ({ message }) => {
  return (
    <div className='error'>
      {/* <img src='/images/bunny-error.png' alt='error' /> */}
      <p>{message}</p>
    </div>
  );
};

export default Error;
