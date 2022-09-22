import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
      <a href="mailto:jackrobert0220@gmail.com" target="_blank"
    
            rel="noreferrer"><h1>Shoot us an email!</h1><HiOutlineMail
            size={40}
            style={{ color: "#ffff"}}
          /></a>
          <div>
          <h1>or reach out on social media!</h1>
    </div>
    </div>
  )
}

export default Form