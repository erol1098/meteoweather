import { createContext, useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [daily, setDaily] = useState();
  const [loading, setLoading] = useState(false);
  const [detailPageTheme, setDetailPageTheme] = useState('empty');

  const { createUser, signIn, logOut, googleAuth, error, userInfo } =
    useFirebase();
  const values = {
    response,
    setResponse,
    daily,
    setDaily,
    detailPageTheme,
    setDetailPageTheme,
    loading,
    setLoading,
    userInfo,
    createUser,
    signIn,
    logOut,
    googleAuth,
    error,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
