import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import './Actions.css'
import {API_KEY, imageUrl} from '../../Constants/Constants' 
function Actions() {

      const [movies, setMovies] = useState([])

      useEffect(()=>{
        axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`).then((response)=>{
          setMovies(response.data.results)
          
        })
        }, [])
    





  return (
    <div className='row'>
      <h2>Actions</h2>
      <div className='posters'>
      {movies.map((obj)=>
      <img className="poster" src={`${imageUrl+obj.poster_path}`} alt="poster" />

      )}
      
      </div>
    </div>
  )
}

export default Actions
