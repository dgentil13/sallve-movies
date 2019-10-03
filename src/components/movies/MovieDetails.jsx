import React, { useState, useEffect } from 'react';
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

  return (
    <div className='movie'>
      <header className='movie-header'>
        <div className='movie-title'>
          <span> {movie.Title} </span>
          <button>
            <Link to='/'>BACK</Link>
          </button>
        </div>
        <div className='movie-sub'>
          <p>
            {movie.Year} - {movie.Genre}
          </p>
          <div className='awards'>
            <label> Awards</label>

            <p>{movie.Awards}</p>
          </div>
        </div>
      </header>

      <section className='movie-info'>
        <img src={movie.Poster} alt='Poster' />
        <div className='movie-data'>
          <label>Plot</label>
          <p>{movie.Plot}</p>
          <label>Actors</label>
          <p>{movie.Actors}</p>
          <label>Director</label>
          <p>{movie.Director}</p>
          <label>Writer</label>
          <p>{movie.Writer}</p>
          <div className='ratings'>
            <h2> Ratings </h2>
            <div className='ratings-source'>
              {movie && movie.Ratings.length !== 0 ? (
                movie.Ratings.map((rating, idx) => {
                  let value =
                    rating.Value.replace(/[^0-9]/g, '').slice(0, 2) / 20;
                  return (
                    <div key={idx}>
                      <label>{rating.Source}</label>
                      <StarRatings
                        rating={value}
                        starDimension='20px'
                        starSpacing='0px'
                        starRatedColor='#9f77ff'
                        starEmptyColor='rgb(203, 211, 227)'
                      />
                    </div>
                  );
                })
              ) : (
                <p> No ratings available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
