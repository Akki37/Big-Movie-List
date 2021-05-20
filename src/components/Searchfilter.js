import React, { useState } from 'react'
import {useSelector ,useDispatch} from "react-redux"
import {searchMovie} from "../actions/searchActions"
import { sortOption } from '../actions/sortActions'
import '../StyleSheets/Searchfilter.css'
function Searchfilter(props) {
    const movies = useSelector(state => state.movies)
    const sorting = useSelector(state => state.sorting)
    const dispatch = useDispatch()
    const[search,setSearch]=useState("")
    function handleSearch(e){
        const result = e.target.value
        const input  = result.trim()
        if(input.length>0){
          let searchResult = [...movies]
          for(let i=0 ; i<input.length ; i++){
              const data = searchResult.filter((movie)=>{
                  return input[i].toLowerCase() === movie.Title.charAt(i).toLowerCase()
              })
              if(data.length>0){
                  searchResult = data
              }else{
                  searchResult = []
              }
          }
        dispatch(searchMovie(searchResult))
    }else{
        dispatch(searchMovie([]))
    }
        
        setSearch(result)
    }
    function handleSelect(e){
       const result = e.target.value
       dispatch(sortOption(result))
    }
   
    return (
        <div className="search_filter"> 
        <form onSubmit={(e)=>{e.preventDefault()}} className="form">
        <input className="search_input" type="text" placeholder="Search By Name..." value={search} onChange={handleSearch}/>
        <div className="sort">
        <i className="fas fa-sort"></i>
        <select  className="select_Sort" value={sorting} onChange={handleSelect}>
            <option value="DEFAULT">Sort By</option>
            <option value="RANK_UP">High Rank</option>
            <option value="RANK_DOWN">Low Rank</option>
        </select>
        </div>
        </form>
        </div>
    )
}
export default Searchfilter