import React, { useEffect, useState } from 'react';
import { StyledContainer, StyledTable } from '../styles/styled-componets';

import Card from '../components/Card';
import History from '../components/History';
import withContext from '../hocs/withContext';

import defaultCard from '../services/defaultCard';
import setBg from '../services/setBg';

const Home = ({ response, loading, detailPageTheme, setDetailPageTheme }) => {
  window.scroll(0, 0);

  //? For default card data
  const [defaultQuery, setDefaultQuery] = useState();

  //? Default card render if Location Services is allowed
  useEffect(() => {
    defaultCard(setDefaultQuery);
  }, []);

  //? Arrange Background Theme
  useEffect(() => {
    setBg(response?.weather[0]?.id, setDetailPageTheme);
  }, [response, setDetailPageTheme]);

  useEffect(() => {
    !response && setBg(defaultQuery?.weather[0]?.id, setDetailPageTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultQuery]);

  return (
    <StyledContainer theme={detailPageTheme}>
      <div className='response-item'>
        {response && <Card data={response} />}
        {!response && defaultQuery && <Card data={defaultQuery} />}
        {!loading && !response && !defaultQuery && (
          <StyledTable>
            <tbody>
              <tr>
                <td colSpan={3}>
                  Please allow location services for your current location
                  <br /> or <br />
                  Use search bar for new query.
                </td>
              </tr>
            </tbody>
          </StyledTable>
        )}
      </div>
      <div className='history-items'>
        <History />
      </div>
    </StyledContainer>
  );
};

export default withContext(Home);
