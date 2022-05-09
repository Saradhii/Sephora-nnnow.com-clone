import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./sale.css"

function Sale(props) {
    const BackToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    return (
        <>
        <div className="carousel">   
            <Carousel infiniteLoop stopOnHover autoPlay showThumbs={false} showStatus={false} showArrows={true}>
                <div>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Offerpage_DoublesidedcleansingbrushDesktop.jpg" />
                </div>
                <div>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/SC_Topbanner_Upto40offDesktop.jpg" />
                </div>
                </Carousel>
        </div>
        <div className='summer-image'>
          <img src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2022/SalePageBanner-Desktop.jpg" alt="" />
        </div>

        <div className='title'>
            <img src="https://logan.nnnow.com/content/dam/nnnow-project/30-sep-2020/30SEP20_SEPHORA-OFFERPAGEZ_PREHEADER_DESK.jpg" alt="" />
        </div>

        <div className='sale-container'>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/PIXI_P-story.jpg" alt="" /></div>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/ABH_P-story.jpg" alt="" /></div>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2022/MarioBadescuP-story(1).jpg" alt="" /></div>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/17-dec-2021/ForeoPStory.jpg" alt="" /></div>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/12-nov-/13SEP21-HP-DearDahlia-TB-LIPSUITE-APP.jpg" alt="" /></div>
            <div><img src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/Abhatipstory.jpg" alt="" /></div>
        </div>

        <div className='banner14'>
           <div onClick={BackToTop}>🔼BACK TO TOP</div>
        </div>

        <div className='forms'>
    GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION<br></br><br></br>
    <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" /><button>SUBSCRIBE</button>
    </div>

        <div className='footer-content'>
        <section className='section'>
            <h2 className='tagline'>Sephora offers are available on one convenient page</h2>
            <div className='last-div'>
            Are you tired of searching online to get Sephora discounts and coupon codes from third-party websites? Sephora promo codes feature all your favourite makeup brands so you don’t have to look any further.We 
            beat the leading competitor makeup portals with discounts and deals you can’t find anywhere else. Plus, we have the latest international brands only at Sephora India! We are the only distributor of international            
            prestige beauty. All our products are authentic, and we’re offering you discounted prices every week!
            <br/>
            <br/>
            <h2>Calling all makeup junkies, perfumistas and beauty influencers!</h2>
            Huge blowout sales on Sephora! Get ‘em while you can. Sephora offers you amazing deals, discounts and offers every day. Who doesn’t want makeup nearly half off? Whether you’re shopping for school, college,
            work or elsewhere, Sephora promo codes and top beauty offers bring you amazing deals in a click of a button. The wide range of Sephora coupon codes can be applied on haircare essentials, skincare basics, tools,
            and even perfume! It’s not every day you get authentic high-end fragrances at incredibly low prices! Look nowhere else and stock up and save for the hottest beauty products half off!
            <br/>
            <br/>
            <h2>We Belong to Something Beautiful</h2>
            Shop everything from skincare, to hair products and beauty and get a free tote bag for free! Download the app to check out the hottest products on the go. Get seasonal, daily, and weekly discounts on the coolest
            international brands via your phone or desktop. Sephora offers discounts and deals specialised for loyal customers so you save more in the long run. Not only are the products high-quality, but they’re all available in
            a one-stop-shop. Stock up on seasonal beauty to mix-and-match everything in your makeup kit for every occasion, every day.
            <br/>
            <br/>
            <h2>Sephora Offers for office Beauty</h2>
            Why wear the same makeup look to work every week? Sephora understands your need for a new look every day. With slashed prices on makeup palettes, lipsticks, shampoos and conditioners, lip kits, hair
            treatments, perfume, makeup brushes, and everything else in between, you’re sure to find something to suit your taste. Shop brands like Anastasia Beverly Hills, Estée Lauder, Make Up For Ever, Versace, and so
            much more for any occasion. With men’s and women’s beauty, grooming, prepping and priming basics are essential for every day dressing. With Sephora’s daily deals, you can shop high-quality essentials for work
            and everywhere else.
            <br/>
            <br/>
            <h2>Shop NNNOW online or on the mobile app</h2>
            A leader in prestige omni-retail, our purpose at Sephora is to create an inviting beauty shopping experience and inspire fearlessness in our community. With an ever-increasing assortment of products from carefully
            curated brands, featuring indie darlings, emerging favorites, trusted classics, and Sephora’s own, SEPHORA COLLECTION, now the whole family can shop their favourite trends, styles, and essentials online or via the
            mobile app. With a wide variety of beauty products for every skin type, shop trusted brands, the latest looks, designs and stylish looks from the comfort of your home. Discover online shopping that offers
            advantages like flat 50% off, swatches and sachets, and discounts with complimentary beauty offers. Get amazing deals on fashion and apparel too with a click of a button on NNNOW.com.
            </div>
        </section>
        </div>
        </>
        
    );;
}

export default Sale;