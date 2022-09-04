import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, StyledMainContainer } from '../styles/styled-componets';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledMainContainer>
      <section>
        <h1>Page Not Found!</h1>
        <div>
          <Button className='home' onClick={() => navigate('/')}>
            Home
          </Button>
          <Button className='go-back' onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </section>
    </StyledMainContainer>
  );
};

export default NotFound;
