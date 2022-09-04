import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import LazyLoading from '../components/LazyLoading';
import withContext from '../hocs/withContext';

const Home = lazy(() => import('../pages/Home'));
const DetailPage = lazy(() => import('../pages/DetailPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));

const AppRouter = ({ userInfo }) => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Suspense fallback={<LazyLoading />}>
        <Routes>
          <Route
            path='/'
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path='login'
            element={
              !userInfo ? (
                <ErrorBoundary>
                  <SignIn />
                </ErrorBoundary>
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path='register'
            element={
              !userInfo ? (
                <ErrorBoundary>
                  <SignUp />
                </ErrorBoundary>
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path='details/:query'
            element={
              !userInfo ? (
                <Navigate to='/login' />
              ) : (
                <ErrorBoundary>
                  <DetailPage />
                </ErrorBoundary>
              )
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default withContext(AppRouter);
