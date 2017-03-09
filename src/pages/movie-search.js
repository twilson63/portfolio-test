import React, { Component } from 'react'
import 'tachyons/css/tachyons.css'
import fetch from 'isomorphic-fetch'
import Search from './components/search'
import Posters from './components/posters'
import { Link } from 'react-router-dom'
import { propOr } from 'ramda'


const url = 'https://www.omdbapi.com/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
      searchedFor: ''
    }
    this.search = this.search.bind(this)
  }

  search ({searchText, searchType}) {
    fetch(`${url}?s=${searchText}&type=${searchType.toLowerCase()}`)
      .then(res => res.json())
      .then(res => {
        return res
      })
      .then(json => this.setState({
        searchedFor: searchText,
        movies: propOr([], 'Search', json),
        error: json.Error
      }))
      .catch(err =>
        this.setState({
          error: 'Error Occured: Try Again',
          movies: [],
          searchedFor: ''
      }))
  }

  render() {
    return (
      <div className="pa4">
        <h1>Movie Search</h1>
        <div className="pv2">
        <Link to="/">Menu</Link>
        </div>
        <Search search={this.search} />
        {this.state.error ? <h2>{this.state.error}</h2> : null}
        {this.state.searchedFor ? <p>Searched for: {this.state.searchedFor}</p> : null}
        <Posters movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
