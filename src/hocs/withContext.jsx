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
      auth,
      db,
      userInfo,
      createUser,
      signIn,
      logOut,
      googleAuth,
      error,
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
        auth={auth}
        db={db}
        userInfo={userInfo}
        logOut={logOut}
        createUser={createUser}
        signIn={signIn}
        googleAuth={googleAuth}
        error={error}
        {...props}
      />
    );
  };
};
export default withContext;
