import { useContext } from 'react';
import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  return (props) => {
    const { response, setResponse, daily, setDaily } = useContext(AppContext);
    return (
      <WrappedComponent
        response={response}
        setResponse={setResponse}
        daily={daily}
        setDaily={setDaily}
        {...props}
      />
    );
  };
};
export default withContext;
