import React from 'react';
import { AppContextProvider } from './context/app-context';
import AppRouter from './router/AppRouter';
import { GlobalStyle } from './styles/styled-componets';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer />
    </AppContextProvider>
  );
};

export default App;
