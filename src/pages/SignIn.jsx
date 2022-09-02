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
    Toastify('error', error?.message);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
        <input type='email' name='email' id='email' />
        <label htmlFor='password1'>Password</label>
        <input type='password' name='password1' id='password1' />
        <label htmlFor='password2'>Confirm Password</label>
        <input type='password' name='password2' id='password2' />
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
