// import PropTypes from 'prop-types';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const MovieDetails = props => {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${props.match.params.id}&apikey=a5f7ff9b`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);

  console.log(movie);

  return (
    <div>
      <h1> {movie.Title} </h1>
      <p>
        {movie.Year} - {movie.Genre}
      </p>
      <button>
        <Link to='/'>BACK</Link>
      </button>
      <img src={movie.Poster} alt='Poster' />
      <p>{movie.Plot}</p>
      <p>{movie.Actors}</p>
      <p>{movie.Director}</p>
      <p>{movie.Writer}</p>
      <p>{movie.Awards}</p>
      <p> Ratings </p>
      {movie && movie.Ratings.length !== 0 ? (
        movie.Ratings.map(rating => {
          let value = rating.Value.replace(/[^0-9]/g, '').slice(0, 2) / 20;
          return (
            <div>
              <p>{rating.Source}</p>
              <StarRatings
                rating={value}
                starDimension='16px'
                starSpacing='0px'
                starRatedColor='#9F77FF'
                starEmptyColor='rgb(203, 211, 227)'
              />
            </div>
          );
        })
      ) : (
        <p> No ratings available</p>
      )}
    </div>
  );
};

// Card.propTypes = {
//   name: PropTypes.string,
// };

export default MovieDetails;
