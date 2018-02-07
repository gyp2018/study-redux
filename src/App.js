import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieInput from './components/MovieInput';
import MovieList from './components/MovieList';
import { connect } from 'react-redux';
import { addMovieList } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(title) {
    this.props.addMovie(title);
  }

  render() {
    const { movieList } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Do Watch!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MovieInput addMovie={this.addMovie} />
        <MovieList list={movieList} />
      </div>
    );
  }
}
const mapStateToProps = ({ movieList }) => {
  return {
    movieList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: title => {
      dispatch(addMovieList(title))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
