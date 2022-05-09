import React from 'react'
import MidHeader from '../header/MidHeader'
import MainHeader from '../header/MainHeader';
import Header from '../header/Header';
import Home from '../home/Home'
import Footer from '../header/Footer';
import { Route, Routes } from 'react-router-dom';
import Brands from '../header/Brands';
import Makeup from '../makeup/Makeup';
import Skincare from '../Skincare/Skincare';
import Fragrance from '../Fragrance/Fragrance';
import Product from "../Product detail/components/Product";
import Product2 from '../Product detail/components/Product2';
import Product1 from '../Product detail/components/Product1';
import Login from '../header/Login';
import Sale from "../Sales/Sale";
import Cart from "../Cart/Cart"
import Payment from '../Payment/Payment';
import Otp from '../Otp & success/Otp';

const Homepage = () => {
  return (
    <>
    <MidHeader/>
    <MainHeader />
    <br></br>
    <br></br>
    <Header />
    <br></br>
    <br></br>
    <Routes>
        <Route default path='/' element={<Home/>}/>
        <Route path='/sales' element={<Sale/>}/>
        <Route path='/makeup/*' element={<Makeup/>}/>
        <Route path='/skincare' element={<Skincare/>}/>
        <Route path='/fragrance' element={<Fragrance/>} />
        <Route path='/haircare' />
        <Route path='/makeup/:id' element={<Product/>}/>
        <Route path='/skincare/:id' element={<Product1/>}/>
        <Route path='/fragrance/:id' element={<Product2/>}/>
        <Route path='/tools&brushes' />
        <Route path='/brands' element={<Brands />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/otp' element={<Otp/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    <br></br>
    <hr style={{ width: "82%" }} />
    <Footer />
    </>
  )
}

export default Homepage