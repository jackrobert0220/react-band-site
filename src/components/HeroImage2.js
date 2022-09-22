import React, { Component } from 'react'
import './HeroImageStyles2.css'

export class HeroImage2 extends Component {
  render() {
    return (
      <div className='hero-img2'>
      <div className="heading2">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
      
      </div>
    )
  }
}

export default HeroImage2