import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ poster, redirect, id }) => {
  return (
    <div className='card' onClick={() => redirect(id)}>
      <div className='card-body'>
        <img src={poster} />
      </div>
    </div>
  );
};

// Card.propTypes = {
//   name: PropTypes.string,
// };

export default Card;
