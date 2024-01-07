import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import CarouselMenu from './Carousel/CarouselMenu'

const Homepage = () => {
  return (
    <div className='home'>
      <Router>
        <Navbar/>
        <CarouselMenu/>
      </Router>
      
    </div>
  )
}

export default Homepage