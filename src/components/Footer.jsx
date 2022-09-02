import React from 'react';
import { StyledFooter } from '../styles/styled-componets';

const Footer = () => {
  return (
    <StyledFooter>
      <strong>Copyright © {new Date().getFullYear()} </strong>
      <a href='https://github.com/erol1098' target={'_blank'} rel='noreferrer'>
        erol1098
      </a>
    </StyledFooter>
  );
};

export default Footer;
