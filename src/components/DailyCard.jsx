import React from 'react';
import { StyledDaily } from '../styles/styled-componets';

const DailyCard = ({ data }) => {
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
      <p>{data?.max_temp}</p>
      <p>{data?.min_temp}</p>
    </StyledDaily>
  );
};

export default DailyCard;
