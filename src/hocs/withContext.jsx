import { useContext, useRef } from 'react';

import AppContext from '../context/app-context';

const withContext = (WrappedComponent) => {
  return (props) => {
    const token = useRef(localStorage.getItem('accessToken') || '');

    const {
      //? Main Card
      response,
      setResponse,
      loading,
      setLoading,

      //? Daily Cards
      daily,
      setDaily,
      dailyLoading,
      setDailyLoading,

      //? Detail Page
      detailPageTheme,
      setDetailPageTheme,

      //? Firebase Authentication
      userInfo,
      createUser,
      signIn,
      logOut,
      googleAuth,
      error,

      //? Units
      units,
      setUnits,
      measurements,
      setMeasurements,
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
        error={error}
        token={token}
        {...props}
      />
    );
  };
};
export default withContext;
