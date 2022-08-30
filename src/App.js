import React from 'react';
import { AppContextProvider } from './context/app-context';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
};

export default App;
