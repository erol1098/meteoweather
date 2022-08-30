import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
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
        {response && <Card data={response} scale={1} />}
      </div>
      {response ? (
        <>
          {localStorage.getItem('history') && (
            <div className='history-items'>
              {queries?.slice(1)?.map((item, i) => (
                <Card key={i} data={item} scale={0.75} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {localStorage.getItem('history') && (
            <div className='history-items'>
              {queries?.map((item, i) => (
                <Card key={i} data={item} scale={0.75} />
              ))}
            </div>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default withContext(Home);
