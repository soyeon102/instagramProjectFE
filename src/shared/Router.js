import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyfeedPage from '../pages/MyfeedPage';
import { useSelector } from 'react-redux';
import { getCookie } from './Cookie';

const Router = () => {
  const token = getCookie('ACCESS_TOKEN');
  console.log('my token!', token);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 이후 home 접근 불가능 */}
        {/* <Route
          path='/'
          element={token === undefined ? <Navigate to='/login' /> : <Home />}
        /> */}
        <Route
          path='/myfeed'
          element={
            token === undefined ? <Navigate to='/login' /> : <MyfeedPage />
          }
        />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
