import React from 'react'
import './Login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    
    return (
<div>
    <h2 style={{"text-align":"center"}}>LOGIN</h2><br></br>
    <lable className='lable'>Enter your Phone / Email</lable><br></br>
    <form className='myform'>
    <input type="text" placeholder='Enter your Phone number' style={{"border":"2px solid black", "width" : "90%"}}></input><br></br><br></br>
    <button className='button'>CONTINUE</button>
    <br></br>
    <br></br>
    <h3>_____________Or_____________</h3>
    <br></br>
    <button className='button1'><GoogleIcon></GoogleIcon>&nbsp;&nbsp;&nbsp;Continue with Google</button>
    <br></br><br></br>
    <button className='button2'><FacebookIcon></FacebookIcon>&nbsp;&nbsp;&nbsp;Continue with Facebook</button>
    <br></br><br></br>
    <p>By proceeding, you agree to <span className='span21'>Privacy Policy, <br></br>Terms & Conditions</span></p>
    </form>
</div>
    )
}

export default Login;