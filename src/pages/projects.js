import React from 'react'

import { Link } from 'react-router-dom'

class Projects extends React.Component {
  render () {
    return (
      <div>
        <h1>Menu</h1>
        <ul>
          <li><Link to="/eight-ball">Eight Ball</Link></li>
          <li><Link to="/movie-search">Movie Search</Link></li>
          <li><Link to="/youtube-search">Youtube Search</Link></li>

        </ul>
      </div>
    )
  }
}

export default Projects
