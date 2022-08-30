import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

`;

export const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 10rem);
  padding: 3rem;
`;

export const StyledHeader = styled.header`
  border: 1px solid red;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  & .geocoder-container {
    display: flex;
    align-items: center;
    border: 1px solid blue;
    width: 50%;

    & input {
      border: none;
      text-indent: 2rem;
    }
  }
`;

export const StyledCard = styled.section`
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  border: 1px solid red;
`;
