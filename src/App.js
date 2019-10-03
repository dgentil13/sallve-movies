import React from 'react';
import Home from './components/home/Home';
import MovieDetails from './components/movies/MovieDetails';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/movies/:id' component={MovieDetails} />
    </Switch>
  );
};

export default App;
