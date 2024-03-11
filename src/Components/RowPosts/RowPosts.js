import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import './RowPosts.css'
import {API_KEY, imageUrl} from '../../Constants/Constants' 
function RowPosts() {

      const [movies, setMovies] = useState([])

      useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
          console.log("----",response.data.results)
          setMovies(response.data.results)
          
        })
        }, [])
    





  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
      {movies.map((obj)=>
      <img className="poster" src={`${imageUrl+obj.poster_path}`} alt="poster" />

      )}
      
      </div>
    </div>
  )
}

export default RowPosts
