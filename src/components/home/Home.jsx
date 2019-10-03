import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import Card from '../home/movie-cards/Card';
import Error from '../search/validation/Error/Error';
import Load from '../search/validation/Loading/Load';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');
  const [classes, setClasses] = useState('header');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState('');
  const [error, setError] = useState(false);

  // handles query submit and requests data
  const submitHandler = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=a5f7ff9b`)
      .then(res => {
        setLoading(false);
        setMovies(res.data);
        setQuery('');
        changeClasses(res.data.Response);
      })
      .catch(err => {
        setLoading(false);
        setMovies('');
        setQuery('');
      });
  };

  // handles typing value
  const changeHandler = e => {
    setQuery(e.target.value);
  };

  // handles header class and error message
  const changeClasses = movieSearch => {
    return movieSearch === 'True'
      ? setClasses('header--small')
      : (setClasses('header'), setError(true));
  };

  const redirectHandler = id => {
    setRedirect(id);
  };

  if (redirect.length > 0) {
    return <Redirect to={`/movies/${redirect}`}></Redirect>;
  }
  return (
    <Fragment>
      <section className={classes}>
        <div className='search-side'>
          <h4>SALLVE MOVIES</h4>
          <Search
            query={query}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
          />
        </div>
      </section>
      <section>
        {/* SEARCH RESULT IMAGES */}
        {movies.Search &&
          movies.Search.map((elem, idx) => {
            return (
              <Card
                key={idx}
                id={elem.imdbID}
                poster={elem.Poster}
                redirect={redirectHandler}
              />
            );
          })}

        {/* LOADING */}
        {loading && <Load />}

        {/* ERROR */}
        {error && <Error message={movies.Error} />}
      </section>
    </Fragment>
  );
};

export default Home;
