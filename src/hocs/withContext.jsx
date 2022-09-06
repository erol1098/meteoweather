import { useContext, useRef } from 'react';
import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  return (props) => {
    const token = useRef(localStorage.getItem('accessToken') || '');

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
      userInfo,
      createUser,
      signIn,
      logOut,
      googleAuth,
      error,
      units,
      setUnits,
      measurements,
      setMeasurements,
      isLoggedIn,
      setIsLoggedIn,
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
        userInfo={userInfo}
        logOut={logOut}
        createUser={createUser}
        signIn={signIn}
        googleAuth={googleAuth}
        units={units}
        setUnits={setUnits}
        measurements={measurements}
        setMeasurements={setMeasurements}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        error={error}
        token={token}
        {...props}
      />
    );
  };
};
export default withContext;
