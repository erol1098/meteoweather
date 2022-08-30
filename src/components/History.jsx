import React from 'react';
import { StyledTable } from '../Style/styled-componets';

const History = ({ response, queries }) => {
  return (
    <StyledTable>
      <tbody>
        {queries?.map((query) => (
          <tr>
            <td>
              <p>{query.name.replace(' Province', '').toUpperCase()}</p>
              <p>{query.sys.country}</p>
            </td>
            <td>
              <div className='img-wrapper'>
                <img
                  src={`http://openweathermap.org/img/wn/${query.weather[0].icon}@2x.png`}
                  alt='icon'
                />
              </div>
            </td>
            <td>
              {Math.round(query.main.temp)}
              {'°C'}
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default History;
