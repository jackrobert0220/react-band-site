import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage4 from '../components/HeroImage4'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <HeroImage4 heading="Contact" text="Contact the band"/>
    <Form />
    <Footer />
    </div>
  )
}

export default Contact