import { createContext, useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [daily, setDaily] = useState();
  const [loading, setLoading] = useState(false);
  const [detailPageTheme, setDetailPageTheme] = useState('empty');

  const { auth, db, userInfo } = useFirebase();

  const values = {
    response,
    setResponse,
    daily,
    setDaily,
    detailPageTheme,
    setDetailPageTheme,
    loading,
    setLoading,
    auth,
    db,
    userInfo,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
