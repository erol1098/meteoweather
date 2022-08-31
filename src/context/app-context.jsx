import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [daily, setDaily] = useState();
  const values = { response, setResponse, daily, setDaily };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
