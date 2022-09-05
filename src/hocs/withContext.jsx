import { useContext } from 'react';
import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  return (props) => {
    const {
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
        loading={loading}
        setLoading={setLoading}
        daily={daily}
        setDaily={setDaily}
        dailyLoading={dailyLoading}
        setDailyLoading={setDailyLoading}
        detailPageTheme={detailPageTheme}
        setDetailPageTheme={setDetailPageTheme}
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
