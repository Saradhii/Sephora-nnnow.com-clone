import React from 'react'
import { Link } from 'react-router-dom'
import "./sample.css"



const Sample = () => {
  return (
    <div className='main'>
        <div className='top'>
            <h1>ENTER OTP</h1>
            <img src="https://static.nnnow.com/Group%2043389.svg" alt="" />
            <h5>We’ve sent an OTP to +91 8142385201 via SMS. Please enter it below, and you’re done.</h5>
            <lable>OTP</lable><br></br>
            <input type="text" placeholder='Enter OTP' style={{"border":"2px solid black", "width" : "90%"}}></input><br></br><br></br>
            <p><span className='span211'>Use Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Didn't Recieve? <span className='span211'>Resend</span> </p>
            <Link to="/"><button className='button'>SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Sample