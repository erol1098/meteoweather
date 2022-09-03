import React, { useEffect, useState } from 'react';
import { StyledContainer, StyledTable } from '../styles/styled-componets';

import Card from '../components/Card';
import History from '../components/History';
import withContext from '../hocs/withContext';
import defaultCard from '../services/defaultCard';
import setStorage from '../services/local-storage';

const Home = ({ response, loading }) => {
  window.scroll(0, 0);
  const [queries, setQueries] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  const [defaultQuery, setDefaultQuery] = useState();

  //? Writing Responses to Local Storage
  useEffect(() => {
    setStorage(response, setQueries);
  }, [response]);

  //? First Card Render If Location Services is On
  useEffect(() => {
    defaultCard(setDefaultQuery);
  }, []);

  return (
    <StyledContainer>
      <div className='response-item'>
        {response && <Card data={response} />}
        {!response && defaultQuery && <Card data={defaultQuery} />}
        {!loading && !response && !defaultQuery && (
          <StyledTable>
            <tbody>
              <tr>
                <td colSpan={3}>
                  Please allow location for reaching weather forecast of your
                  current location or use search for new query
                </td>
              </tr>
            </tbody>
          </StyledTable>
        )}
      </div>
      <div className='history-items'>
        <History queries={queries} />
      </div>
    </StyledContainer>
  );
};

export default withContext(Home);
