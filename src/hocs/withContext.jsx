import { useContext } from 'react';
import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  return (props) => {
    const {
      response,
      setResponse,
      daily,
      setDaily,
      detailPageTheme,
      setDetailPageTheme,
      loading,
      setLoading,
    } = useContext(AppContext);
    return (
      <WrappedComponent
        response={response}
        setResponse={setResponse}
        daily={daily}
        setDaily={setDaily}
        detailPageTheme={detailPageTheme}
        setDetailPageTheme={setDetailPageTheme}
        loading={loading}
        setLoading={setLoading}
        {...props}
      />
    );
  };
};
export default withContext;
