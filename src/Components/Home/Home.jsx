import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Videos from '../Videos/Videos';
import './Home.css';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
    <div className="container">
      
      <div className="HomeBannerCls">
   <HomeBanner/>
   
   </div>
   
   <div className="VideosCls">
    <h1>Today's Top Movies and Webseries </h1>
   <Videos/>
   </div>
   <Footer/>
   </div>
    </>
  )
}

export default Home
