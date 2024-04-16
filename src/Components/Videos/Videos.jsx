import React from 'react'
import './Videos.css'; 
import VideoCard from '../VideoCard/VideoCard.jsx';
import JSON from '../JSON/Data.json'
const Videos = () => {
  const data = JSON.Movie.categories[0];
console.log(data.name)
  return (
    <>
    
    <div className="super-video-container">

        <div className="movie-video">
          {
            data.videos.map((movies)=>
          <VideoCard key={movies.id}movies={movies}/>)
          }
        </div>

    </div>
    </>
  )
}

export default Videos;
