import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {removeMovie} from "../actions/moviesActions"
import "../StyleSheets/MovieItems.css"
function MovieItems(props) {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const sortmovies = [].concat(movies)
    const search = useSelector(state => state.search)
    const searchsortmovie = [].concat(search)
    const sorting = useSelector(state => state.sorting)
    
    return  (
          <div className="movieItems">
            {!search.length ? 
            <>
            {(sorting === "DEFAULT" ? movies :
            (sorting === "RANK_UP" ? 
            sortmovies.sort(function(a,b){return (b.imdbRating==="N/A" ? 0 : b.imdbRating) - (a.imdbRating==="N/A" ? 0 : a.imdbRating)}) :
            sortmovies.sort(function(a,b){return (a.imdbRating==="N/A" ? 0 : a.imdbRating)- (b.imdbRating==="N/A" ? 0 : b.imdbRating) })))
            .map((movie)=>{
                return( <div key={movie.imdbID} className="movie_card">
                          <div className="flipcard">
                            <div className="image_details">
                              <div className="img_flipCard">
                                {movie.Poster === "N/A" || !movie.Poster ? 
                                <img  src="/popcorn.png" width="200px" height="300px" alt="img"/>
                                :
                                <img  src={movie.Poster} width="200px" height="300px" alt="img"/>  }
                                <div className="rating">{movie.imdbRating}</div>
                                </div>
                                <div className="details_flipCard">
                                <div className="year_time">
                                    <div id="year">{movie.Year ? movie.Year : "N/A"}</div>
                                    <div id="runtime">{movie.Runtime ? movie.Runtime : "N/A"}</div>
                                  </div>
                              <div className="plot" >
                                 "{movie.Plot ? movie.Plot : "N/A"}"
                                </div>

                                </div>
                              </div>
                            </div>
                          <div className="movie_details">
                              <h2>{movie.Title}</h2>
                              <p>{movie.Genre ? movie.Genre : "N/A"}</p>                            
                            <div className="delete" onClick={()=>{dispatch(removeMovie(movie.imdbID))}} >
                                <i  className="fas fa-trash-alt"></i>
                            </div>
                          </div>
                    </div>
                )
            })}
            </>
            :
            <>
            {(sorting === "DEFAULT" ? search :
            (sorting === "RANK_UP" ? searchsortmovie.sort(function(a,b){return (b.imdbRating==="N/A" ? 0 : b.imdbRating) - (a.imdbRating==="N/A" ? 0 : a.imdbRating)}) :
            searchsortmovie.sort(function(a,b){return (a.imdbRating==="N/A" ? 0 : a.imdbRating) - (b.imdbRating==="N/A" ? 0 : b.imdbRating)}))).map((movie)=>{
                return ( <div key={movie.imdbID} className="movie_card">
                          <div className="flipcard">
                            <div className="image_details">
                               <div className="img_flipCard">
                                  {movie.Poster === "N/A" || !movie.Poster  ? 
                                  <img  src="/popcorn.png" width="200px" height="300px" alt="img"/>
                                  :
                                  <img  src={movie.Poster} width="200px" height="300px" alt="img"/>  }
                                  <div className="rating">{movie.imdbRating}</div>
                                </div>
                                <div className="details_flipCard">
                                  <div className="year_time">
                                    <div id="year">{movie.Year ? movie.Year : "N/A"}</div>
                                    <div id="runtime">{movie.Runtime ? movie.Runtime : "N/A"}</div>
                                  </div>
                                 <div className="plot" >
                                 "{movie.Plot ? movie.Plot : "N/A"}"
                                 </div>
                                </div>
                              </div>
                            </div>
                        <div className="movie_details">
                            <h2>{movie.Title}</h2>
                            <p>{movie.Genre ? movie.Genre : "N/A"}</p>                            
                            <div className="delete" onClick={()=>{dispatch(removeMovie(movie.imdbID))}} >
                                <i  className="fas fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
            </>
            }
          </div>
    )
}

export default MovieItems
