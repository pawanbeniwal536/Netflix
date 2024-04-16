import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import WebSeries from './Components/WebSeries/WebSeries';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movie/>}/>
        <Route path="/Webseries" element={<WebSeries/>}/>
        <Route path="Contact-us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;
