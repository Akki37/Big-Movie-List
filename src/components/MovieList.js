import React from 'react'
import MovieItems from './MovieItems'
import Searchfilter from './Searchfilter'
import "../StyleSheets/MovieList.css"


function MovieList(props) {
  
    return (
        <div className="movie_list">
            <Searchfilter/>
            <MovieItems/>

        </div>
    )
}

export default MovieList
