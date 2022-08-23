import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyfeedPage from '../pages/MyfeedPage';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/modules/userSlice';
import { getCookie } from './Cookie';

const Router = () => {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(getUser());
    getCookie('ACCESS_TOKEN');
    console.log('토큰 가져와!', getCookie('ACCESS_TOKEN'));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 후 홈으로 접근 불가능 */}
        {/* <Route
          path='/'
          element={isLogin ? <Home /> : <Navigate to='/login' />}
        /> */}
        <Route path='/' element={<Home />} />
        <Route
          path='/myfeed'
          element={isLogin ? <MyfeedPage /> : <Navigate to='/login' />}
        />
        <Route path='/signup' element={<SignupPage />} />
        <Route
          path='/login'
          element={isLogin ? <Navigate to='/' /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
