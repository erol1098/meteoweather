import { createContext, useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [daily, setDaily] = useState();
  const [dailyLoading, setDailyLoading] = useState(false);
  const [detailPageTheme, setDetailPageTheme] = useState('empty');
  const [historyItems, setHistoryItems] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );

  const [units, setUnits] = useState('metric');
  const [measurements, setMeasurements] = useState({
    velocity: 'km/h',
    degree: '°C',
  });

  //? Firebase authentication methods from my "web-firebase" library
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
    units,
    setUnits,
    measurements,
    setMeasurements,
    historyItems,
    setHistoryItems,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
