import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import History from '../components/History';
import withContext from '../hocs/withContext';
import defaultCard from '../services/defaultCard';
import setStorage from '../services/local-storage';
import { StyledContainer } from '../Style/styled-componets';

const Home = ({ response }) => {
  const [queries, setQueries] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  const [defaultQuery, setDefaultQuery] = useState();
  //? Writing Responses to Local Storage
  useEffect(() => {
    setStorage(response, setQueries);
  }, [response]);

  useEffect(() => {
    defaultCard(setDefaultQuery);
  }, []);

  return (
    <StyledContainer>
      <div className='response-item'>
        {response ? (
          <Card data={response} />
        ) : (
          <Card data={defaultQuery} /> || <p>Item Goes Here!</p>
        )}
      </div>
      <div className='history-items'>
        <History queries={queries} />
      </div>
    </StyledContainer>
  );
};

export default withContext(Home);
