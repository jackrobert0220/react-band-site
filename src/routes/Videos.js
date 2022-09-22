import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import MVideos from '../components/MVideos'

const Videos = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Videos" text="Official music videos"/>
      <MVideos />
      <Footer />
    </div>
  )
}

export default Videos