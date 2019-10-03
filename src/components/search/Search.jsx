import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <div className='search'>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          placeholder='find a movie'
          value={props.query}
          onChange={props.changeHandler}
        />
        <button type='submit'>
          {/* <img src='./images/search-solid.svg' alt='magnifying glass' /> */}
          SEARCH
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  changeClass: PropTypes.string,
  query: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Search;
