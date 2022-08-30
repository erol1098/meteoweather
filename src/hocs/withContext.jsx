import { useContext } from 'react';
import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  // const history = localStorage.getItem("his")
  return (props) => {
    const { response, setResponse } = useContext(AppContext);
    console.log('dsdgdsgds', response);
    return (
      <WrappedComponent
        response={response}
        setResponse={setResponse}
        {...props}
      />
    );
  };
};
export default withContext;
