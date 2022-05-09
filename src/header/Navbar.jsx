import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <div className='main-header'>
        <div className="dropdown">
          <Link to="/sales" className="dropbtn">SALES</Link>
          <Link to="/makeup" className="dropbtn">MAKEUP</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> FACE </b><br></br><br></br>
                Foundation<br></br>
                BB & CC Cream<br></br>
                Concealer<br></br>
                Face Primer<br></br>
                Highlighter<br></br>
                Face Brushes<br></br>
                Makeup Palette<br></br>
              </div>
              <div>
                <b> EYE </b><br></br><br></br>
                Eye Palettes<br></br>
                Mascara<br></br>
                Eyeliner<br></br>
                Eyebrow<br></br>
                Eyeshadow<br></br>
                Eye Primer<br></br>
                Eye Brushes<br></br>
                Contact Lenses<br></br>
              </div>
              <div>
                <b> LIP </b><br></br><br></br>
                Lipstick<br></br>
                Lip Stain<br></br>
                Lip Gloss<br></br>
                Lip Liner<br></br>
                Lip Balm & Treatment<br></br>
                Lip Brushes<br></br>
              </div>
              <div>
                <b> LIP CHEEK </b><br></br><br></br>
                Blush<br></br>
                Bronzer<br></br>
                Highlighter<br></br>
                Face Oils<br></br>
              </div>
              <div>
                <b> NAIL MAKEUP </b><br></br><br></br>
                Nail Polish<br></br>
                Nail Care<br></br>
                Manicure & Pedicure Tools<br></br>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/skincare" className="dropbtn">SKINCARE</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> MOISTURIZERS </b><br></br><br></br>
                Moisturizers<br></br>
                Night Creams<br></br>
                Mists & Essences<br></br>
                BB & CC Creams<br></br>
              </div>
              <div>
                <b> CLEANSERS </b><br></br><br></br>
                Face Wash & Cleansers<br></br>
                Makeup Removers<br></br>
                Face Wipes<br></br>
                Toners<br></br>
                Eyeshadow<br></br>
                Hand Sanitizers<br></br>

              </div>
              <div>
                <b> TREATMENTS & HIGH TECH TOOLS </b><br></br><br></br>
                Face Serums<br></br>
                Cleansing Tools<br></br>
                Eye Creams & Treatments<br></br>
              </div>
              <div>
                <b> MASKS </b><br></br><br></br>
                Face Masks<br></br>
                Sheet Masks<br></br>
                Eye Masks<br></br>
                Nose Masks & Strips<br></br>
                Lip Masks<br />
                Hair Masks<br />
                Foot Masks <br />
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/fragrance" className="dropbtn">FRAGRANCE</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> TOP MAKEUP BRANDS </b><br /><br />
                Sephora Collection<br></br>
                Lancôme<br></br>
                Benefit Cosmetics<br />
                Anastasia Beverly Hills<br />
                Bobbi Brown<br />
                Smashbox<br />
                Estee Lauder<br />
                Nudestix<br />
                MAC<br />
                Make Up For Ever<br />
                Guerlain<br />
              </div>
              <div>
                <b> TOP SKINCARE BRANDS </b><br /><br />
                Lancôme<br></br>
                Caudalie<br></br>
                Kora Organics<br />
                Mario Badescu<br />
                Pixi<br />
                Smashbox<br />
                Shiseido<br />
                Estee Lauder<br />
                Elizabeth Arden<br />
                Gallinee<br />
                Sunday Riley <br />
              </div>

              <div>
                <b> TOP FRAGRANCE BRANDS </b><br /><br />
                Tom Ford<br></br>
                Hugo Boss<br></br>
                Issey Miyake<br />
                Ermenegildo Zegna<br />
                Dolce & Gabbana<br />
                Paco Rabanne<br />
                Roberto Cavalli<br />
                Yves Saint Laurent<br />
                Calvin Klein<br />
                Gallinee<br />
                Davidoff <br />
              </div>

              <div>
                <b> NEW IN </b><br /><br />
                Juice Beauty<br></br>
                Abhati Suisse<br></br>
                Kora Organics<br />
                Ermenegildo Zegna<br />
                Mario Badescu<br />
                Moroccanoil<br />
                Natasha Denona<br />
                Lancôme<br />
                Tiffany & Co<br />
                Caudalie<br />
                Dear Dahlia <br />
              </div>
              <div>
                <b> BRANDS A-Z </b><br /><br />
              </div>

            </div>
          </div>
        </div>




        <div className="dropdown">
          <Link to="/haircare" className="dropbtn">HAIRCARE</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> SHAMPOO & CONDITIONER </b><br></br><br></br>
                Shampoo<br></br>
                Conditioner<br></br>
              </div>
              <div>
                <b> HAIR STYLING & TREATMENTS </b><br></br><br></br>
                Hair Spray & Styling Products<br></br>
                Hair Oil<br></br>
                Hair Masks<br />
                Hair Clips<br />
              </div>
            </div>
          </div>
        </div>


        <div className="dropdown">
          <Link to="/tools&brushes" className="dropbtn">TOOLS & BRUSHES</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> BRUSHES </b><br /><br />
                Face Brushes<br />
                Eye Brushes<br />
                Lip Brushes<br />
              </div>

              <div>
                <b> TOOLS </b><br /><br />
                Sponges & Applicators<br />
                Face Tools<br />
                Hair Clips<br />
                Sharpeners<br />
                Tweezers & Eyebrow Tools<br />
                Eyelash Curlers<br />
                Accessories<br />
                Brush Cleaners<br />
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/brands" className="dropbtn">BRANDS</Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div>
                <b> WOMEN </b><br></br><br></br>
                Perfumes<br></br>
                Mists and deodrants<br></br>
              </div>
              <div>
                <b> MEN </b><br></br><br></br>
                Perfumes<br></br>
                Body Sprays and deodrants<br></br>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Navbar