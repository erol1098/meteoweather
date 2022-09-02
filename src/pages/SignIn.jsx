import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'web-firebase';
import withContext from '../hocs/withContext';
import useToastify from '../hooks/useToastify';
import { StyledContainer, StyledForm } from '../styles/styled-componets';

const SignIn = ({ auth, userInfo }) => {
  const { signIn, googleAuth, error } = useAuth(auth);
  const navigate = useNavigate();
  const { Toastify } = useToastify();

  const checkError = () => {
    error && Toastify('error', error?.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    signIn(email, password);
  };

  useEffect(() => {
    checkError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    userInfo && Toastify('success', 'Logged In Successfully');
    userInfo && navigate('/');
  }, [userInfo, navigate, Toastify]);

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required autoFocus />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' required />
        <hr />
        <button type='submit'>Sign In</button>
        <button type='button' onClick={() => googleAuth()}>
          Sign In with Google
        </button>
      </StyledForm>
    </StyledContainer>
  );
};

export default withContext(SignIn);
