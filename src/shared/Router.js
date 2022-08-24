import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyfeedPage from '../pages/MyfeedPage';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/modules/userSlice';
import { getCookie } from './Cookie';
import ScrollToTop from './ScrollToTop';

const Router = () => {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.user);

  console.log('라우터 isLogin????????', isLogin);

  useEffect(() => {
    dispatch(getUser());
    // getCookie('ACCESS_TOKEN');
    console.log('라우터 페이지: 토큰 가져와!', getCookie('ACCESS_TOKEN'));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path='/'
            element={isLogin ? <Home /> : <Navigate to='/login' />}
          />
          <Route
            path='/myfeed'
            element={isLogin ? <MyfeedPage /> : <LoginPage />}
          />
          <Route
            path='/signup'
            element={isLogin ? <Navigate to='/' /> : <SignupPage />}
          />
          <Route
            path='/login'
            element={isLogin ? <Navigate to='/' /> : <LoginPage />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
