import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyLoading from '../components/LazyLoading';

const Home = lazy(() => import('../pages/Home'));
const DetailPage = lazy(() => import('../pages/DetailPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LazyLoading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<SignIn />} />
          <Route path='register' element={<SignUp />} />
          <Route path='details/:query' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
