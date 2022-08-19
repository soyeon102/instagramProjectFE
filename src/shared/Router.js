import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyfeedPage from '../pages/MyfeedPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/myfeed' element={<MyfeedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
