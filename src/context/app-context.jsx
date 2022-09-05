import { createContext, useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [daily, setDaily] = useState();
  const [dailyLoading, setDailyLoading] = useState(false);
  const [detailPageTheme, setDetailPageTheme] = useState('empty');

  const { createUser, signIn, logOut, googleAuth, errorAuth, userInfo } =
    useFirebase();

  const values = {
    response,
    setResponse,
    loading,
    setLoading,
    daily,
    setDaily,
    dailyLoading,
    setDailyLoading,
    detailPageTheme,
    setDetailPageTheme,
    userInfo,
    createUser,
    signIn,
    logOut,
    googleAuth,
    error: errorAuth,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
