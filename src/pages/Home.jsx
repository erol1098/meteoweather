import React from 'react';
import withContext from '../hocs/withContext';

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};

export default withContext(Home);
