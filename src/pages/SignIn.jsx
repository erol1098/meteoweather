import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import withContext from '../hocs/withContext';
import toastify from '../services/toastify';
import { StyledMainContainer, StyledForm } from '../styles/styled-componets';
const SignIn = ({ userInfo, signIn, googleAuth, error }) => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const checkError = () => {
    error && toastify('error', error?.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    (async () => {
      setSending(true);
      await signIn(email, password);
      setSending(false);
    })();
  };

  useEffect(() => {
    checkError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    userInfo && toastify('success', 'Logged In Successfully');
    userInfo && navigate('/');
  }, [userInfo, navigate]);
  console.log(sending);
  return (
    <StyledMainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required autoFocus />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' required />
        <button type='submit'>
          {sending ? <SpinnerCircular size={30} color='white' /> : 'Sign In'}
        </button>
        <button type='button' onClick={() => googleAuth()}>
          Sign In with Google
        </button>
        <p onClick={() => navigate('/register')}>
          Don't have an account? Sign Up
        </p>
      </StyledForm>
    </StyledMainContainer>
  );
};

export default withContext(SignIn);
