import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [response, setResponse] = useState();

  const values = { response, setResponse };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
