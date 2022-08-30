import React from 'react';
import Card from '../components/Card';
import withContext from '../hocs/withContext';
import { StyledContainer } from '../Style/styled-componets';

const Home = ({ response }) => {
  return (
    <StyledContainer>
      <Card data={response} />
    </StyledContainer>
  );
};

export default withContext(Home);
