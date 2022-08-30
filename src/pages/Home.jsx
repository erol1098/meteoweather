import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import History from '../components/History';
import withContext from '../hocs/withContext';
import { StyledContainer } from '../Style/styled-componets';

const Home = ({ response }) => {
  const [queries, setQueries] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  //? Writing Responses to Local Storage
  useEffect(() => {
    if (localStorage.getItem('history') && response) {
      const arr = JSON.parse(localStorage.getItem('history'));
      arr.unshift(response);
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
      setQueries(arr.slice(0, 4));
    } else {
      response &&
        localStorage.setItem('history', JSON.stringify([response])) &&
        setQueries([response]);
    }
  }, [response]);

  return (
    <StyledContainer>
      <div className='response-item'>
        {response ? <Card data={response} /> : <p>Item goes here</p>}
      </div>
      <div className='history-items'>
        <History queries={queries} />
      </div>
    </StyledContainer>
  );
};

export default withContext(Home);
