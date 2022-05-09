import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import GetAppIcon from '@mui/icons-material/GetApp';
import TimelineIcon from '@mui/icons-material/Timeline';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './Header.css'
import { useNavigate } from 'react-router-dom';


const MidHeader = () => {
    const navigate = useNavigate();
    return (

        <>
            <header>
                <div className="containerFoot">
                    <MenuIcon />

                    <img onClick={() => navigate('/home')} src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
                        alt="" />
                    <div className="vl"></div>
                    <LocationOnIcon style={{ color: "#ec008c" }} />
                    <span className="store">Store Locator</span>
                    <div className="discountCode">
                        <span className="light">
                            <ViewInArIcon style={{ color: "#ec008c" }} /> Get 15 % Off on a purchase of Rs 6,000 | CODE : SEP15  <ViewInArIcon style={{ color: "#ec008c" }} />
                        </span>
                    </div>
                    <div className="last">
                        <GetAppIcon style={{ color: "#ec008c" }} /><span className="light">Get App</span>
                        <div className="vl"></div>
                        <TimelineIcon style={{ color: "#ec008c" }} /> <span className="light">Track Order</span>
                        <div className="vl"></div>
                        <LoyaltyIcon style={{ color: "#ec008c" }} /><span className="light">Loyalty</span>
                    </div>
                </div>
            </header>
        </>

    )
}

export default MidHeader