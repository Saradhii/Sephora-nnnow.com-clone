import React,{useState} from 'react'
import './MainHeader.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Login from './Login';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Sample from './Sample';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const MainHeader = () => {


    const [active, setActive] = useState(false);
    const [open, setOpen] = React.useState(false);

    const [login, setLogin] = useState(true);
    const [otp, setOtp] = useState(false);

      const handleClick2 = () => {
        setLogin(false);
        setOtp(true);
      };

  const handleClickOpen = () => {
    setOpen(true);
    setLogin(true);
    setOtp(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

    const handleClick = () => {
        setActive(!active)
        active && <Login />
    }
    return (
        <div>
            <div className="containerFoot2">
                <div>
                    <form className="form">
                        <button type="submit"><SearchIcon /></button>
                        <input type="text" placeholder="Search SEPHORA" name="search" />
                    </form>
                </div>
                <div>
                    <h1>SEPHORA</h1>
                </div>
                <div>
                    <Link className="icon" to="/favourites">
                        <FavoriteIcon />
                    </Link>
                    <div className="vl"></div>
                    <Link className='icon' to="/cart">
                        <ShoppingCartIcon />
                    </Link>
                    <div className="vl"></div>
                    {/* <Link className="login" to="/login"> */}
                        <PersonIcon onClick={handleClickOpen} style={{ color: "#ec008c" , cursor: "pointer"}} />
                        {/* <PersonIcon onClick={handleClick} style={{ color: "#ec008c" }} /> */}
                        {/* <button style={{ border: "none", background: "none" }} className="tooltiptext">Login
                        </button> */}
                    {/* </Link> */}
                    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {/* <Login/> */}
           {/* <Sample/> */}
            {login ?      <div>
    <h2 style={{"text-align":"center"}}>LOGIN</h2><br></br>
    <lable className='lable'>Enter your Phone / Email</lable><br></br>
    <form className='myform'>
    <input type="text" placeholder='Enter your Phone number' style={{"border":"2px solid black", "width" : "90%"}}></input><br></br><br></br>
    <button className='button'onClick={handleClick2}>CONTINUE</button>
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
    </div> : null}
            {otp ? <div className='main'>
        <div className='top'>
            <h1>ENTER OTP</h1>
            <img src="https://static.nnnow.com/Group%2043389.svg" alt="" />
            <h5>We’ve sent an OTP to +91 ********01 via SMS. Please enter it below, and you’re done.</h5>
            <lable>OTP</lable><br></br>
            <input type="text" placeholder='Enter OTP' style={{"border":"2px solid black", "width" : "90%"}}></input><br></br><br></br>
            <p><span className='span211'>Use Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Didn't Recieve? <span className='span211'>Resend</span> </p>
            <Link to="/"><button onClick={handleClose} className='button'>SUBMIT</button></Link>
        </div>
    </div> : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;