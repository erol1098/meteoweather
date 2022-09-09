import React from 'react';
import { StyledContainer } from '../styles/styled-componets';

import { SpinnerCircularFixed } from 'spinners-react';

const LazyLoading = () => {
  return (
    <StyledContainer>
      <SpinnerCircularFixed size={200} />
    </StyledContainer>
  );
};

export default LazyLoading;
