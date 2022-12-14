import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import LazyLoading from '../components/LazyLoading';
import withContext from '../hocs/withContext';

//? Lazy Loading Components
const Home = lazy(() => import('../pages/Home'));
const DetailPage = lazy(() => import('../pages/DetailPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));

const AppRouter = () => {
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
            path='details/:query'
            element={
              <ErrorBoundary>
                <DetailPage />
              </ErrorBoundary>
            }
          />

          <Route
            path='login'
            element={
              <ErrorBoundary>
                <SignIn />
              </ErrorBoundary>
            }
          />
          <Route
            path='register'
            element={
              <ErrorBoundary>
                <SignUp />
              </ErrorBoundary>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default withContext(AppRouter);
