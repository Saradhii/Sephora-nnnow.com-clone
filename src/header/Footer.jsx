import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="links">
                <h4><Link to="/">WHO WE ARE</Link></h4>
                <h4><Link to="/">FREQUENTLY ASKED QUESTIONS</Link></h4>
                <h4><Link to="/">CONTACT US</Link></h4>
            </div>
            <div className="social">
                <FacebookIcon className="fa-brands fa-facebook-f" />
                <InstagramIcon className="fa-brands fa-instagram" />
                <TwitterIcon className="fa-brands fa-twitter" />
                <YouTubeIcon className="fa-brands fa-youtube" />
            </div>

            <div className='copy'>
                <span style={{  color: "black" }}><CopyrightIcon style={{ fontSize: "small"}} />2022 NNNOW</span> | <span style={{  color: "black" }}>Privacy Policy</span> | <span style={{  color: "black" }}>Terms & Conditions</span>
            </div>

            <div className='footer-brand'>
                <h4>BRANDS</h4>
                <p style={{ width: "80%" }}>Sephora Collection | Benefit Cosmetics | Make Up For Ever | Cover FX | Stila | Natio | Burt's Bees | Foreo | Smashbox | Glamglow |Clinique | Estee Lauder | Elizabeth Arden |
                    Givenchy | Bobbi Brown |Shiseido | OPI | Forest Essentials | Percy & Reed | Boscia | Oscar Blandi | Burberry | CK Fragrances | Kenzo | Tom Ford | Bvlgari | Carolina Herrera | Davidoff | Giorgio Armani | Montblanc | Paco Rabanne | Yves Saint Laurent | Azzaro | Nina Ricci | Roberto Cavalli | Zirh | Omorfee
                </p>
            </div>

            <div className='footer-brand'>
                <h4>MAKEUP</h4>
                <p>Face | Cheek | Eye | Lip | Nail | Makeup Palettes | Accessories</p>
            </div>

            <div className='footer-brand'>
                <h4>SKINCARE</h4>
                <p>Moisturizers | Cleansers | Treatments | Masks | Eye Care | Sun Care | Lip Treatments</p>
            </div>

            <div className='footer-brand'>
                <h4>OTHER CATEGORIES</h4>
                <p>Fragrances | Tools & Brushes</p>
            </div>

            <div className='footer-brand'>
                <h4>MY SEPHORA</h4>
                <p>My orders | Store Locator | Sephora Facebook | Sephora Instagram</p>
            </div>
        </div>
    )
}

export default Footer