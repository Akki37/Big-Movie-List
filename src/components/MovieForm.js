import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {addMovie} from "../actions/moviesActions"
import "../StyleSheets/MovieForm.css"
import { TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

 
function MovieForm(props) {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const[fetchedmovieData,setFetchedData]=useState({})
    const[movieName,setMovieName]=useState("")
    const[ranking,setRanking]=useState("")
    const[formError,setFormError]=useState({})
    const error={}
    
    const handleChange=(e)=>{
     if(e.target.name === "movie"){
        setMovieName(e.target.value)
         axios.get(`http://www.omdbapi.com/?apikey=22080078&t=${e.target.value.toLowerCase()}`)
         .then((response)=>{
             const result = response.data
             if(result.Response==="True"){
                 if(movies.some( movie=> movie.imdbID === result.imdbID)){
                    error.exist = "Already In List"
                    setFormError(error)
                 setFetchedData(result) 
               }else{
                   delete error.exist
                   setFormError(error)
                 setFetchedData(result) 
               }
             }else{
                 setFetchedData({})
                 
             }
         })
         .catch((err)=>{
             console.log("error",err.message)
         })
     } else
      if(e.target.name === "rank"){
         const userInput = e.target.value.trim()
         setRanking(userInput)
         if(userInput.length>0){
             if(!/^[0-9.]{1,3}$/i.test(userInput)){
                error.rank = "Invalid Format"
                        setFormError(error)
             }else{
                          delete error.rank
                          setFormError(error)
                      }
         }
     }
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Object.keys(error).length){
            setFormError(error)
        }else{
            setFormError({})
            if(fetchedmovieData.Response==="True"){
               dispatch(addMovie(fetchedmovieData))
            }else{
                const MovieData = {
                    imdbID:Number(new Date()),
                    Title:movieName,
                    imdbRating:Number(ranking)
                    }
                dispatch(addMovie(MovieData))
            }
        setMovieName("")
        setRanking("")
        setFetchedData({})
        
    }
    }
    return (
        <div className="addMovie_form">
            <form onSubmit={handleSubmit}>
                <TextField 
                        id="outlined-basic" size="small" 
                        color="secondary" style={{marginBottom:"10px"}}
                        name="movie" className="movie_name" 
                        label="Enter Movie Name" required autoComplete="off" 
                        value={movieName}  onChange={handleChange}  variant="outlined" />
                 <br/>
                {fetchedmovieData.Response==="True" ? 
                    <div className="Title_Found" onClick={()=>{setMovieName(fetchedmovieData.Title)}}>
                    <img 
                        src={fetchedmovieData.Poster==="N/A" ?
                        "popcorn.png" : fetchedmovieData.Poster} 
                        width="20px" alt="img"/>
                    {fetchedmovieData.Title}
                    </div>
                    :
                null}
                <TextField  
                        id="outlined-basic" size="small" 
                        color="secondary"
                        style={{marginBottom:"10px",borderBlockColor:"white"}} 
                        className="movie_rank" type="text" name="rank" 
                        label="IMDb Ranking" required autoComplete="off" 
                        value={fetchedmovieData.imdbRating ? fetchedmovieData.imdbRating : ranking} 
                        onChange={handleChange} variant="outlined"  />
                {formError.rank ? <div className="format_error">{formError.rank}</div> : null} <br/>
                <button className="add_button" disabled={formError.exist||formError.rank ? true : false} type="submit"><AddIcon/>Add</button>
                {formError.exist ? <div className="exist_error">{formError.exist}</div>:null}
            </form>
        </div>
    )
}

export default MovieForm
