import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ poster, redirect, id }) => {
  return (
    <div className='card' onClick={() => redirect(id)}>
      <img src={poster} />
      <div className='card-overlay'>
        <p> See Details</p>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   name: PropTypes.string,
// };

export default Card;
