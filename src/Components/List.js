import React, { Component } from 'react'
import ListItem from './ListItem'
import Form from './Form'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: movies,
    }
  }

  addMovie(title, year, posterImg) {}

  deleteMovie(id) {}

  render() {
    const moviesMap = this.state.movies.map((movie) => {
      return <ListItem key={movie.id} movie={movie} />
    })
    return (
      <div className="List">
        <Form />
        {moviesMap}
      </div>
    )
  }
}
export default List