import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../Components/Monu/Home/Home';
import ProductPage from '../Components/Chetan/ProductPage';
import { PrivateRoute } from './Private';
import AboutUs from '../Components/Monu/Login/aboutus';
import Payment from '../Components/Monu/Payment/Payment';
import { ChakraProvider } from '@chakra-ui/react';
import Thankyou from '../Components/Monu/Payment/ThankYou';
import Cart from '../Components/Monu/Cart/Cart';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={
       <PrivateRoute>
      <ProductPage/>
      </PrivateRoute>}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/payment' element={<ChakraProvider><Payment /></ChakraProvider>}></Route>
      <Route path='/thanks' element={<ChakraProvider><Thankyou /></ChakraProvider>}></Route>
    </Routes>
  );
};

export default AllRoutes;
