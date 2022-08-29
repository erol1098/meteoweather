import React, { useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
  const response = useFetchData();
  console.log(response);
  return <div>Home</div>;
};

export default Home;
