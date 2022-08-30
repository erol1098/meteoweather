import React from 'react';
import { StyledCard } from '../Style/styled-componets';

const Card = ({ data }) => {
  return (
    <StyledCard>
      <p>{data?.main?.temp}</p>
      <p>{data?.main?.feels_like}</p>
      <p>{data?.main?.temp_min}</p>
      <p>{data?.main?.temp_max}</p>
    </StyledCard>
  );
};

export default Card;
