import React, { useState } from 'react'
import './MainHeader.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Login from './Login';
const MainHeader = () => {
    const [active, setActive] = useState(false);


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
                    <Link className="login" to="/login">
                        <PersonIcon onClick={handleClick} style={{ color: "#ec008c" }} />
                        {/* <button style={{ border: "none", background: "none" }} className="tooltiptext">Login
                        </button> */}
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default MainHeader;