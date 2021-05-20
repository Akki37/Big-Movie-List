import React from 'react'
import {useSelector} from "react-redux"
import "../StyleSheets/MovieStats.css"
import LocalActivityIcon from '@material-ui/icons/LocalActivity';

function MovieStats(props) {
    const movies = useSelector(state => state.movies)
    const sortmovie = [].concat(movies)
    const topRanked = movies.length ? sortmovie.sort((a,b)=>{return b.imdbRating - a.imdbRating})[0]: ""
    return (
        <div className="stats">
            { Object.keys(topRanked).length ? 
            <>
            <div className="topRate">
                <div className="imdbBox">
                    <p className="imdb_p">imdb</p>
                    <p className="imdbRank_p">{topRanked.imdbRating}/10</p>
                </div>
            </div>
             <div className="topRanked">
                 {topRanked.Poster==="N/A" ? <img  src="/popcorn.png" alt="img"/>:<img  src={topRanked.Poster} alt="img"/>}
                
                <div className="details">
                    <div className="TopRanked_Title">{topRanked.Title}<span>({topRanked.Year})</span></div>
                    <div className="genre">{topRanked.Genre}</div>
                    <div className="director">Director : <span>{topRanked.Director}</span></div>
                    <div className="writer">Writer : <span>{topRanked.Writer}</span></div>
                </div>
            </div> 
            <div className="total_movie">TOTAL MOVIES : <span>{movies.length}</span></div>
            </>
            : <div className="topRankedMovie">
                <LocalActivityIcon 
                style={
                    {
                        fontSize:"100px",
                        width:"100%",
                        color:"gray",
                        display:"flex",
                        alignContent:"center"
                        }}/>
                <p>Top Ranked Movie</p>
                </div> }
            

        </div>
    )
}

export default MovieStats
