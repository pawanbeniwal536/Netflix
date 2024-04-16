import React from 'react'
import HomeBanner from '../HomeBanner/HomeBanner'
import Videos from '../Videos/Videos'
import Footer from '../Footer/Footer'
import './Movie.css';

const Movie = () => {
  return (
    <>
    <div className="container">
      <div className="HomeBannerCls">
   <HomeBanner/>
   </div>
   <div className="VideosCls">
    <h1>Top Movies</h1>
   <Videos/>
   </div>
   <Footer/>
   </div>
    </>
  )
}

export default Movie
