import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  font-family: 'Poppins', sans-serif;
}
`;

export const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 10rem);
  padding: 3rem;
  background-color: aliceblue;
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
  width: 25rem;
  height: 33rem;

  padding: 1rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;

  & > .card-header {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    border-bottom: 2px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .location {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
  }

  & > .card-content {
    width: 100%;
    height: 23rem;
    padding: 0 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > .temps {
      width: 100%;
      text-align: start;
    }

    & > .data-wrapper {
      position: absolute;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      justify-content: center;
      align-items: center;

      & > .current-temp {
        font-size: 2rem;
        letter-spacing: 0.1rem;
      }
    }
    & > .img-wrapper {
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 80%;
      }
    }
    & > .misc-data {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > span {
        /* width: 33%; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.1rem;
      }
    }
  }

  & > .card-footer {
    width: 100%;
    height: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid blue;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  border: 1px solid red;
`;
