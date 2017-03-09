import React, { Component } from 'react';
import 'tachyons/css/tachyons.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Projects from './pages/projects'
import EightBall from './pages/eight-ball'
import MovieSearch from './pages/movie-search'
import YoutubeSearch from './pages/youtube-search'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="pa4">

          <Route exact path="/" component={Projects} />
          <Route path="/eight-ball" component={EightBall} />
          <Route path="/movie-search" component={MovieSearch} />
          <Route path="/youtube-search" component={YoutubeSearch} />

        </div>
      </Router>
    );
  }
}

export default App;
