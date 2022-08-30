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
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 3)));
      setQueries(arr.slice(0, 3));
    } else {
      response &&
        localStorage.setItem('history', JSON.stringify([response])) &&
        setQueries([response]);
    }
  }, [response]);

  return (
    <StyledContainer>
      {localStorage.getItem('history') && (
        <>
          {queries?.map((item, i) => (
            <Card data={item} scale={i ? 0.75 : 1} />
          ))}
        </>
      )}
      {!localStorage.getItem('history') && response && (
        <Card data={response} scale={1} />
      )}
    </StyledContainer>
  );
};

export default withContext(Home);
