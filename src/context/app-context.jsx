import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [loc, setLoc] = useState({ lat: '', lon: '' });
  const values = { response, setResponse, loc, setLoc };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
