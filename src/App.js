import React from 'react';

import { GlobalStyle } from './styles/styled-componets';

import { AppContextProvider } from './context/app-context';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <AppRouter />
    </AppContextProvider>
  );
};

export default App;
