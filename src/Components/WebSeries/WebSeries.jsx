import React from 'react'

import HomeBanner from '../HomeBanner/HomeBanner'
import Videos from '../Videos/Videos'
import Footer from '../Footer/Footer'

import './WebSeries.css'

const WebSeries = () => {
  return (
    <>
    <div className="container">
      <div className="HomeBannerCls">
   <HomeBanner/>
   </div>
   <div className="VideosCls">
    <h1>Top WebSeries</h1>
   <Videos/>
   </div>
   <Footer/>
   </div>
    </>
  )
}

export default WebSeries
