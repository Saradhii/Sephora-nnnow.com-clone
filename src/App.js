import './App.css';
import Header from './header/Header';
import MainHeader from './header/MainHeader';
import MidHeader from './header/MidHeader';
import Footer from './header/Footer';
import { Route, Routes } from 'react-router-dom';
import Brands from './header/Brands';
import Login from './header/Login';

function App() {
  return (
    <>
      <MidHeader />
      <MainHeader />
      <br />
      <br />
      <Header />


      <Routes>
        <Route default path='/' />
        <Route path='/sales' />
        <Route path='/makeup' />
        <Route path='/skincare' />
        <Route path='/fragrance' />
        <Route path='/haircare' />
        <Route path='/tools&brushes' />
        <Route path='/brands' element={<Brands />} />
        <Route path='/login' element={<Login />} />
      </Routes>



      <br></br>
      <hr style={{ width: "82%" }} />
      <Footer />
    </>
  );
}

export default App;
