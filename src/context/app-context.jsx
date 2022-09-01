import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [daily, setDaily] = useState();
  const [detailPageTheme, setDetailPageTheme] = useState('empty');
  const values = {
    response,
    setResponse,
    daily,
    setDaily,
    detailPageTheme,
    setDetailPageTheme,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
