import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../Components/Monu/Home/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={<Home />}></Route>
      <Route path='/cart' element={<Home />}></Route>
      <Route path='/payment' element={<Home />}></Route>
    </Routes>
  );
};

export default AllRoutes;
