import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from '../components/Footer';
import Header from '../components/Header';
import DetailPage from '../pages/DetailPage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<SignUp />} />
        <Route path='details/:query' element={<DetailPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRouter;
