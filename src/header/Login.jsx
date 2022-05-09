import React from 'react'
import './Login.css';
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {

    return (
        <div className="logincontainerFoot">

            <form className="formlogin">
                <CloseIcon style={{ color: "#ec008c", marginLeft: "280px" }} />
                <h1 className="formlogin-heading">Login</h1>
                <input name="name" className="email" type="email" placeholder="Enter Email" />
                <input name='password' className="pass" type="password" placeholder="Enter password" />
                <input type="submit" value="Login" />
                <hr />
                <p>Don't have an account?</p>
                <button className="signuppage" onclick="goSignUp()">Create Account</button>
            </form>

        </div>
    )
}

export default Login;