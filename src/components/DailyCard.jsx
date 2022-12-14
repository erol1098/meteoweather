import React from 'react';
import { StyledDaily } from '../styles/styled-componets';

const DailyCard = ({ data }) => {
  //? Renders daily weather data in bottom of Detail Page
  return (
    <StyledDaily>
      <p>
        {new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
        }).format(new Date(data?.datetime))}
      </p>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
        alt='icon'
        width={60}
      ></img>
      <div>
        <span>
          {Math.round(data?.max_temp)}
          {'°'}
        </span>
        {' / '}
        <span>
          {Math.round(data?.min_temp)}
          {'°'}
        </span>
      </div>
    </StyledDaily>
  );
};

export default DailyCard;
