import React from 'react';
import { StyledTable } from '../styles/styled-componets';

import withContext from '../hocs/withContext';
import historyCard from '../services/historyCard';

const History = ({ queries, setResponse, setLoading }) => {
  //? Fetch current weather data of clicked history city's item
  const handleClick = (searchParams) => {
    console.log('object');
    historyCard(searchParams, setResponse, setLoading);
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <th colSpan={3}>
            <h3>Past Search</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {!queries.length && (
          <tr>
            <td>No Item Found!</td>
          </tr>
        )}
        {queries?.map((query, i) => (
          <tr key={i} onClick={() => handleClick(query?.response?.coord)}>
            <td>
              <p>
                {query?.response?.name?.replace(' Province', '').toUpperCase()}
              </p>
              <p>{query?.response?.sys?.country}</p>
            </td>
            <td>
              <div className='img-wrapper'>
                <img
                  src={`http://openweathermap.org/img/wn/${query?.response?.weather[0]?.icon.replace(
                    'n',
                    'd'
                  )}@2x.png`}
                  alt='icon'
                />
              </div>
            </td>
            <td>
              {Math.round(query?.response?.main?.temp)}
              {'°C'}
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default withContext(History);
