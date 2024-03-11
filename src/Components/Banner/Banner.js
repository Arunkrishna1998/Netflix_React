import React, { useState,useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants' 
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  const [moviedescription, setMovieDescription] = useState()
  const [moviename, setMoviename] = useState()
  
  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
        console.log("-a",response.data.results[2])
        setMovie(response.data.results[2])
        setMoviename(response.data.results[2].title)
        console.log("-m",moviename)
        // setMovieDescription(response.data.results[0].overview)
      })
  }, [])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className="title">{movie ? movie.title : moviename}</h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade'></div>
      
    </div>
  )
}

export default Banner
