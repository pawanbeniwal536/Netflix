import React from 'react'
import './VideoCard.css';
import dummy from '../../Assest/dummy.png';

const VideoCard = ({movies}) => {
  return (
<>
<div className="videocard-super-container">
    <div className="video-img">
        {/* <img src={movies.thumb} alt="Image Not loaded" /> */}
        <video className="video-background"   controls>
                    <source src={movies.sources[0]} type='video/mp4'/>
                    Your browser does not support the video tag.

                </video>
                
<div className="video-content">
  <h1>{movies.title}</h1>
  <h3>{movies.subtitle}</h3>
  <h5>{movies.description}</h5>
</div>
    </div>
</div>
</>
  )
}
    export default VideoCard
