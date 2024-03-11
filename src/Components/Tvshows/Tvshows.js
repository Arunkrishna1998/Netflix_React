import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import './Tvshows.css'
import {API_KEY, imageUrl} from '../../Constants/Constants' 
function Tvshows() {

      const [movies, setMovies] = useState([])

      useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}`).then((response)=>{
          setMovies(response.data.results)
          
        })
        }, [])
    





  return (
    <div className='row'>
      <h2>TV</h2>
      <div className='posters'>
      {movies.map((obj)=>
      <img className="poster" src={`${imageUrl+obj.poster_path}`} alt="poster" />

      )}
      
      </div>
    </div>
  )
}

export default Tvshows
