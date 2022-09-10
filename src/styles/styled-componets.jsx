import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Bg from '../assets/bg.jpg';
import NotFound from '../assets/not-found.png';

// --bs-primary: #0d6efd;
// --bs-secondary: #6c757d;
// --bs-success: #198754;
// --bs-info: #0dcaf0;
// --bs-warning: #ffc107;
// --bs-danger: #dc3545;
// --bs-light: #f8f9fa;
// --bs-dark: #212529;

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  font-family: 'Poppins', sans-serif;
  background: url(${Bg}) fixed no-repeat center;
  min-width:550px;
  user-select:none;
}
`;

export const StyledContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${(props) => props.theme}) fixed no-repeat center;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

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
export const StyledMainContainer = styled(StyledContainer)`
  background: url(${Bg}) fixed no-repeat center;

  & > .not-found {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 5rem;
    width: 100%;
    padding-bottom: 2rem;
    height: calc(100vh - 12rem);
    background-color: rgba(0, 0, 0, 0.6);
    color: #fefefe;
    background: url(${NotFound}) no-repeat center;
    background-size: contain;

    & > div {
      display: flex;
      gap: 2rem;
    }
  }
`;

export const StyledDetailContainer = styled.main`
  min-height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  gap: 1rem;
  background: url(${(props) => props.theme}) fixed no-repeat center;
  padding: 3rem 0;

  & > .top-side {
    @media (max-width: 1060px) {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      & .middle-side {
        order: 2;
      }
    }

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    & > section {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 1rem;
      border-radius: 1rem;
      height: 18rem;
      width: 20rem;
      display: flex;
      flex-direction: column;
      transition: transform 1s;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    & > section:nth-child(2) {
      width: 27rem;
    }
  }

  & .right-side,
  .middle-side {
    gap: 1.4rem;
    font-size: 1.2rem;

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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    padding: 0.2rem 0;

    & > div,
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.3rem;
      font-weight: 600;
    }

    & .current {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
    }
    & .current-temp {
      font-size: 3rem;
      font-weight: 800;
    }
  }
`;

export const StyledHeader = styled.header`
  @media (max-width: 976px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  min-height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, #ff512f, #f09819);

  & button {
    width: 6rem;
    padding: 0.4rem 0;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.7);
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & > .logo {
    cursor: pointer;

    & > h1 {
      font-size: 1.6rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  & .geocoder-container {
    display: flex;
    align-items: center;
    width: 50%;
    min-width: 450px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 0.5rem;
    padding: 0.3rem;
    background-color: #fff;

    & input {
      border: none;
      font-size: 1.3rem;
    }

    &::before {
      content: '🔍';
      font-size: 1.5rem;
    }
  }
`;

export const StyledCard = styled.section`
  width: 30rem;
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 1s;
  background-color: rgba(51, 51, 51, 0.8);
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
    background: linear-gradient(to top, #ff512f, #f09819);

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
    font-weight: 500;
    border-radius: 0 0 1rem 1rem;
    background: linear-gradient(to bottom, #aaa, rgba(51, 51, 51, 0.8));
  }
`;

export const StyledTable = styled.table`
  width: 30rem;
  height: 33rem;
  border-collapse: separate;
  border-spacing: 0 0.3rem;
  font-size: 1.3rem;
  color: #fff;
  background-color: rgba(44, 62, 80, 0.6);
  padding: 1rem;
  border-radius: 1rem;
  & th {
    background: linear-gradient(to top, #ff512f, #f09819);
  }

  & tr {
    height: 2rem;
    background-color: rgba(51, 51, 51, 0.8);
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
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  overflow-x: auto;
  height: 12rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.6);

  & > p {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (min-width: 1540px) {
    justify-content: center;
  }
`;

export const StyledDaily = styled.div`
  width: 9rem;
  min-width: 8rem;
  height: 10rem;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
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
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 30rem;
  min-width: 350px;
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ddd;
  & > h1 {
    text-align: center;
    width: 100%;
  }
  & > input {
    width: 100%;
    height: 2rem;
    border-radius: 0.3rem;
    border: none;
    text-indent: 1rem;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
  }

  & > button {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.4rem;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
  }

  & > button[type='submit'] {
    background-color: green;
    color: white;
  }

  & > button[type='button'] {
    background-color: white;
    color: green;
    border: 2px solid green;
  }

  & > p {
    width: 100%;
    font-weight: 600;
    text-decoration: underline;
    color: #fff;
    text-align: end;
    cursor: pointer;
  }

  & > hr {
    width: 100%;
    height: 0.5rem;
    background: linear-gradient(to top, #ff512f, #f09819);
  }

  & > label {
    font-weight: 600;
  }
`;

export const Button = styled.button`
  width: 6rem;
  padding: 0.4rem 0;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;

  &.home {
    background-color: #198754;
    color: #f8f9fa;
  }

  &.go-back {
    background-color: #ffc107;
  }

  &.logout-btn {
    border: 2px solid #3498db;
    color: #3498db;
    background-color: #f8f9fa;

    &:hover {
      background-color: #3498db;
      color: #f8f9fa;
    }
  }

  &.register-btn {
    border: 2px solid #0d6efd;
    color: #0d6efd;
    background-color: #f8f9fa;

    &:hover {
      background-color: #0d6efd;
      color: #f8f9fa;
    }
  }

  &.login-btn {
    border: 2px solid #198754;
    color: #198754;
    background-color: #f8f9fa;

    &:hover {
      background-color: #198754;
      color: #f8f9fa;
    }
  }
`;
