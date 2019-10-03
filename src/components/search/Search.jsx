import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <form onSubmit={props.submitHandler} className={props.classe}>
      <input
        type='text'
        placeholder='find a movie'
        value={props.query}
        onChange={props.changeHandler}
      />
      <button type='submit'>
        {/* <img src='./images/search-solid.svg' alt='magnifying glass' /> */}
        search
      </button>
    </form>
  );
};

Search.propTypes = {
  changeClass: PropTypes.string,
  query: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Search;
