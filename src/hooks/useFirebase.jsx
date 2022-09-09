import { useEffect } from 'react';

import { useAuth, useFirestore, initialize } from 'web-firebase';

//? My "web-firebase" Library for making easier some of Firebase authentication and Firestore database operations
const useFirebase = () => {
  const { auth, db } = initialize({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
  });
  const { userObserver, userInfo } = useAuth(auth);

  useEffect(() => {
    userObserver(auth);
    userInfo && localStorage.setItem('accessToken', userInfo?.accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  //? For Authentication Process
  const {
    createUser,
    signIn,
    googleAuth,
    updateUserProfile,
    updateUserEmail,
    changePassword,
    verifyEmail,
    resetPassword,
    logOut,
    error: errorAuth,
  } = useAuth(auth);

  //? For Firebase Database Operations
  const {
    addNewEntry,
    getEntries,
    updateEntries,
    deleteEntry,
    error: errorDb,
  } = useFirestore(db);

  return {
    //? Authentication
    createUser,
    signIn,
    googleAuth,
    updateUserProfile,
    updateUserEmail,
    changePassword,
    verifyEmail,
    resetPassword,
    logOut,
    errorAuth,
    userInfo,

    //? Firebase
    addNewEntry,
    getEntries,
    updateEntries,
    deleteEntry,
    errorDb,
  };
};
export default useFirebase;
