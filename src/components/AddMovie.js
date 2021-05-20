import React from 'react'
import MovieForm from './MovieForm'
import "../StyleSheets/AddMovie.css"
import MovieCreationIcon from '@material-ui/icons/MovieCreation';

function AddMovie(props) {
    return (
        <div className="add_movie">
            <div className="addmovie_heading">Add Movie<MovieCreationIcon style={{fontSize:"35px",marginLeft:"5px"}}/></div>
            <MovieForm/>
        </div>
    )
}

export default AddMovie
