// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
