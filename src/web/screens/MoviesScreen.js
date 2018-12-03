// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// redux
import { onGetMoviesRequest } from "../../shared/redux/MoviesRedux"

// components
import { Button, ListItem } from "../components"

type Props = {
  onGetMoviesRequest: typeof onGetMoviesRequest,
  error: any,
  movies: Array<any>,
}

class MoviesScreen extends Component<Props> {
  getMovies = () => {
    const { onGetMoviesRequest } = this.props
    onGetMoviesRequest()
  }

  navigateToDetail = id => {
    // @TODO navigate to detail
  }

  render() {
    const { error, movies } = this.props
    return (
      <div>
        <header>
          <Button onClick={this.getMovies}>Download data</Button>
        </header>
        <Link to="/detail">Detail</Link>
        <p>
          {movies &&
            movies.map(movie => (
              <ListItem params={movie.id} onClick={this.navigateToDetail}>
                {movie.title}
              </ListItem>
            ))}
        </p>
        <p>{error && error.message}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movies: state.movies.items,
  error: state.movies.error,
})

const mapDispatchToProps = {
  onGetMoviesRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesScreen)
