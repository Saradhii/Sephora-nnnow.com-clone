import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./images/slide_1.jpg";
import image2 from "./images/slide_2.jpg";
import image3 from "./images/slide_3.jpg";
import image4 from "./images/slide_4.jpg";
import image5 from "./images/slide_5.jpg";
import image6 from "./images/slide_6.jpg";
import styles from"./home.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";
import { FaBookmark } from 'react-icons/fa';

const images = [image1, image2, image3, image4, image5 , image6];


const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 1,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ height: "600px" , width:"100%"}} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    indicators:true,
    slidesToScroll: 2
}

const BackToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

function Home() {
  return (
<>
       <Slideshow />
    <div className={styles.body1}>
       <div className={styles.Blackbuttons}>
           <div>STEALS & DEALS</div>
           <div>BEAUTY MINIS<br></br>UNDER 999</div>
           <div>EVERYDAY<br></br>ESSENTIALS</div>
           <div>TRENDING NOW</div>
           <div>EDITOR'S PICKS</div>
           <div>TOP FRAGRANCES</div>
       </div>
       <div className={styles.banner}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/10-feb-2022/SephoraBrandoftheweektext3310x240.jpg" alt="img" />
       </div>
       <div className={styles.banner1}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2022/HPBanner-Desktop.jpg" alt="img" />
       </div>
       <div className={styles.banner2}>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile1.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile3.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile2.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/20-april-2022/Clarins_BrandStoreTile4.jpg" alt="" />
          </div>
       </div>
       <div className={styles.banner3}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg" alt="img" />
       </div>
       <div className={styles.sliders1}>
         <div className={styles.items1}>
             <div>
                 <img src="https://cdn07.nnnow.com/web-images/medium/styles/JY27S21V62P/1649999368078/1.jpg" alt="" />
                 <h5><b>NATASHA DENONA</b><br></br>Pastel Eyeshadow
                 Patelle<br></br><b>Rs.6,500</b></h5>
             </div>
             <div>
                 <img src="https://cdn17.nnnow.com/web-images/medium/styles/2LJHP9ZCBV8/1645680487451/1.jpg" alt="" />
                 <h5><b>NATASHA DENONA</b><br></br>Marco Tech Eye
                 Crayon<br></br><b>Rs.2,350</b></h5>
             </div>
             <div>
                 <img src="https://cdn16.nnnow.com/web-images/medium/styles/LXIPKNCS9XP/1649999294883/1.jpg" alt="" />
                 <h5><b>NATASHA DENONA</b><br></br>I Need A Rose Lip
                 Crayon<br></br><b>Rs.2,200</b></h5>
             </div>
         </div>
         <div>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/QFG8omRfQos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
       </div>
       <div className={styles.banner4}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="" />
       </div>
       <div className={styles.banner5}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_HeaderStrip_ItsGettingHotInHeretext3310x240.jpg" alt="" />
       </div>
       <div className={styles.banner6}>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_ContentP-Story_DrapedBlush.jpg" alt="" />
         </div>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_ContentP-Story_HotGloss.jpg" alt="" />
         </div>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_ContentP-Story_CleanSlate.jpg" alt="" />
         </div>
       </div>
       <div className={styles.banner7}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg" alt="" />
       </div>
       <div className={styles.slider2}>
       <Slider {...settings}>
       {
          data.map((el) => {
             return(
             <>
                        <div className={styles.products}>
                        <img src={el.image1} alt={el.name} height = "200px" width={"200px"} />
                        <h5> <span1 className={styles.redc}><FaBookmark/>OFFER</span1><br></br><b>{el.brand}<br></br></b>{el.name} <br></br>{el.color} <br></br> Price: <b>{el.price}</b></h5>
                        </div>     
             </>
                   )
             })
       } 
       </Slider>
       </div>
       <div className={styles.banner8}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" alt="" />
       </div>
       <div className={styles.banner9}>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg" alt="" />
           </div>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg" alt="" />
           </div>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg" alt="" />
           </div>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg" alt="" />
           </div>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg" alt="" />
           </div>
           <div>
               <img src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg" alt="" />
           </div>
       </div>
       <div className={styles.banner10}>
           <img src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" alt="" />
       </div>
       <div className={styles.banner11}>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/01-april-2022/Kayali_NOTB.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/18-april-2022/se/HudaBeauty_NOTB_GLOWISHrange.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/05-april-2022/MarcJacobs_NOTB.jpg" alt="" />
          </div>
          <div>
              <img src="https://logan.nnnow.com/content/dam/nnnow-project/19-april-2022/Clarins_NOTB.jpg" alt="" />
          </div>
       </div>
       <div className={styles.banner12}>
            <img src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt="" />
       </div>
       <div className={styles.banner13}>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" alt="" />
         </div>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" alt="" />
         </div>
         <div>
             <img src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" alt="" />
         </div>
             <div>
               <span>MAKING A LOOK</span> <br></br>
               With Anaita Shroff Adajania
             </div>
             <div>
               <span>7 MASKS</span><br></br>
               that'll save your skin
             </div>
             <div>
                <span>LONG LASTING MAKEUP?</span><br></br>
                Here's how!
             </div>
       </div>
       <div className={styles.banner14}>
           <div onClick={BackToTop}>🔼BACK TO TOP</div>
       </div>
    </div>
    <div className={styles.forms}>
    GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION<br></br><br></br>
    <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" /><button>SUBSCRIBE</button>
    </div>
    <div className={styles.matter2}>
    <p className={styles.weightfont}>Sephora online India is a trailblazer in the Indian beauty scene</p><br></br>
A leader in luxury beauty and skincare, our purpose at Sephora online India is to create an inviting online beauty shopping experience and inspire fearlessness in our community. Since the Sephora India launch in <br></br>2013, we have been an industry-leading champion of diversity, and empowerment, guided by our longstanding company values.<br></br><br></br><br></br>

    <p className={styles.weightfont}>Discover who we are and what we entail only on NNNOW.com</p><br></br>
\nOwned by LVMH Moet Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora was founded in France by Dominique Mandonnaud in 1970 and is defined by its unique, open-sell environment <br></br>with an ever-increasing assortment of best-selling lipsticks, eyeliners, foundations, eye palettes and more from carefully curated brands such as Make Up For Ever, Estee Lauder, Benefit Cosmetics, Huda Beauty and <br></br> many more.<br></br>

<p className={styles.weightfont}>Shop Our unrivalled range of Sephora products for a more beautiful you</p><br></br>
\nOur array on Sephora NNNOW features trusted classics from Pixi, Elizabeth Arden, Anastasia Beverly Hills, Clinique, Tom Ford, and Sephora’s own, SEPHORA COLLECTION. Today, Sephora India online is <br></br>a powerful beauty presence in the digital space, thanks to its unparalleled assortment of prestige products in every category, unbiased service from beauty experts, interactive shopping environment, and innovation.<br></br><br></br>

Through some of our bestsellers such as Sephora lipsticks, Sephora foundations, and other Sephora products, we explore the universe of beauty and wellness with an unbiased approach to experiential retail. We <br></br> also host expert tutorial videos from our top brands to help you nail the perfect smokey eye or winged eyeliner. Our team of experts in-store also works hard to assure you have a seamless shopping experience with <br></br>us and helps you define your skin undertones while purchasing the right sephora foundation for you. Sephora continues to give back to communities and advance inclusion in the beauty industry by providing an <br></br>unrivaled range of shades for Sephora foundations at unbeatable prices.<br></br><br></br>

Sephora in India also encompasses a formidable range of skincare, bath and body products, haircare, fragrances and perfumes from international brands. Many of our brands such as Botanist and Forest Essentials <br></br>boast of incorporating only natural ingredients in their products, whereas award-winning such as Natasha Denona, Nudestix, Kora Organics, Aveda, Olaplex, and more promise only SLS/Paraben-free formulas in <br></br>their range of products. Be sure to also check out our range of cruelty-free brands that include best-selling brands such as Caudalie, Smashbox, Dear Dahlia, Juice Beauty and much more. Sephora online hosts the <br></br>entire range of makeup and skin products available in Sephora stores in India. Buy Sephora online on NNNOW and be the first to be alerted when we have a major Sephora India sale event coming up!<br></br>

<p className={styles.weightfont}>Start your Sephora India online shopping on NNNOW.com</p><br></br>

Women can now shop their favorite luxury beauty brands on the Sephora site or via the NNNOW mobile app. Be spoilt for choice with a wide variety of makeup, skincare, haircare, bath and body and fragrances that <br></br>you can shop from the comfort of your home. Discover online shopping that offers advantages such as Gift With Purchase, freebie sachets, and discount offers on beauty! Buy Sephora online at amazing deals and <br></br>prices at the click of a button.
    </div>
        
</>
  );
}

export default Home;
