import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import { StyledContainer } from '../Style/styled-componets';

const LazyLoading = () => {
  return (
    <StyledContainer>
      <SpinnerCircularFixed size={200} />
    </StyledContainer>
  );
};

export default LazyLoading;
