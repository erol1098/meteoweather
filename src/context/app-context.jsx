import { createContext, useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [daily, setDaily] = useState();
  const [dailyLoading, setDailyLoading] = useState(false);
  const [detailPageTheme, setDetailPageTheme] = useState('empty');

  const [units, setUnits] = useState('metric');
  const [measurements, setMeasurements] = useState({
    velocity: 'km/h',
    degree: '°C',
  });

  const { createUser, signIn, logOut, googleAuth, errorAuth, userInfo } =
    useFirebase();
  console.log('object', userInfo);

  if (userInfo) {
    localStorage.setItem('accessToken', userInfo?.accessToken);
  }

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
    units,
    setUnits,
    measurements,
    setMeasurements,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
