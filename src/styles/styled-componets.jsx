import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Clear from '../assets/clear.jpg';
export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  font-family: 'Poppins', sans-serif;
  /* background: linear-gradient(to right bottom, #2980b9, #6dd5fa, #ffffff);  */


}
`;

export const StyledContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 5rem);
  background: linear-gradient(to right bottom, #2980b9, #6dd5fa, #ffffff);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  & > .history-items {
    display: flex;
    justify-content: center;
  }

  & > .response-item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledDetailContainer = styled(StyledContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.theme}) fixed no-repeat center;

  & > .top-side {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    & > section {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 1rem;
      border-radius: 1rem;
    }
  }

  & .right-side {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    & > div,
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
    }
  }
  & .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;

    & > div,
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.3rem;
      font-weight: 600;
    }

    & .current-temp {
      font-size: 3rem;
      font-weight: 800;
    }
  }
`;

export const StyledHeader = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ff5f5d;

  & > .logo {
    cursor: pointer;
  }

  & .geocoder-container {
    display: flex;
    align-items: center;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 0.5rem;
    padding: 0.3rem;
    background-color: #fff;

    & input {
      border: none;
      text-indent: 2rem;
      font-size: 1.3rem;
    }
  }
`;

export const StyledCard = styled.section`
  width: 30rem;
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 1s;
  background: linear-gradient(
    to right,
    rgba(0, 92, 151, 0.4),
    rgba(54, 55, 149, 0.4)
  );

  color: #fff;

  & > .card-header {
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 1rem 1rem 0 0;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00121e;
    background-color: #ff5f5d;
    & > .location {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
  }

  & > .card-content {
    flex: 1;
    width: 100%;
    height: 23rem;
    padding: 0 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > .temps {
      width: 100%;
      font-size: 1.3rem;
      font-weight: 600;
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
      font-size: 1.3rem;

      & > .current-temp {
        font-size: 3rem;
        letter-spacing: 0.1rem;
        font-weight: 800;
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
      font-size: 1.3rem;
      background-color: #00375b;

      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.1rem;
      }
    }
  }

  & > .card-footer {
    width: 100%;
    height: 3rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
    background-color: #00121e;
    border-radius: 0 0 1rem 1rem;
  }
`;

export const StyledTable = styled.table`
  width: 30rem;
  height: 33rem;
  border-collapse: separate;
  border-spacing: 0 0.3rem;
  font-size: 1.3rem;
  color: #fff;
  background: linear-gradient(
    to right,
    rgba(0, 92, 151, 0.5),
    rgba(54, 55, 149, 0.5)
  );
  padding: 1rem;
  border-radius: 1rem;
  & th {
    background-color: #005c97;
  }

  & tr {
    height: 2rem;
    background: linear-gradient(to right, #005c97, #363795);
  }

  & td {
    cursor: pointer;
  }

  & td:first-child {
    font-size: 1.3rem;
    font-weight: 800;
    padding: 0 1rem;
    width: 10rem;
    text-align: center;
  }

  & td:nth-child(2) {
    width: 5rem;
    text-align: center;
  }

  & td:last-child {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.3rem;
    width: 15rem;
    text-align: center;
  }
`;

export const StyledDailyContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 1rem 2rem;
  overflow-x: auto;
  height: 12rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  /* background: url(${Clear}); */
`;

export const StyledDaily = styled.div`
  width: 10rem;
  min-width: 8rem;
  height: 10rem;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 55, 149, 0.9);
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #ddd;
  background-color: #aaa;
  & > a {
    text-decoration: none;
    color: #ddd;
  }
`;

export const StyledError = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
