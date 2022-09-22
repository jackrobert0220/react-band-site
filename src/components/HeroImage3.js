import React, { Component } from 'react'
import './HeroImage3Styles.css'

export class HeroImage3 extends Component {
  render() {
    return (
      <div className='hero-img3'>
      <div className="heading3">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
      
      </div>
    )
  }
}

export default HeroImage3