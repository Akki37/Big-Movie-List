import React from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import "../StyleSheets/MoviesContainer.css"

function MoviesContainer(props) {
    return (
        <div className="movie_container">
            <MovieList/>
            <div className="form_n_stats">
            <AddMovie/>
            <hr style={{margin:"0 10px",border:"1px solid gray",borderRadius:"50%"}}/>
            <MovieStats/>
            </div>
        </div>
    )
}

export default MoviesContainer
