import React from 'react';
import { AppContextProvider } from './context/app-context';
import AppRouter from './router/AppRouter';
import { GlobalStyle } from './styles/styled-componets';

const App = () => {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <AppRouter />
    </AppContextProvider>
  );
};

export default App;
