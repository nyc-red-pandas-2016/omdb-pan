import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false
    };
    this.updateMovies = this.updateMovies.bind(this);
  }

  componentDidMount() {
    this.updateMovies('star wars');
  }

  updateMovies(query='star wars') {
    fetch(`http://www.omdbapi.com/?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.Response === "True") {
          this.setState({movies: data.Search});
        } else {
          this.setState({error: true});
        }
      });
  }

  render() {
    // debugger;
    return (
      <div>
        <SearchBar
          onSearch={this.updateMovies} 
        />
        {this.state.error ? 
              <h1>Movie not found</h1>
           :
              <ul> 
                {this.state.movies.map((movie) => {
                  return (
                    <Movie key={movie.imdbID} 
                      data={movie} 
                    />
                  );
                })}
              </ul>
        }
      </div>
    );
  }
}

export default App;
