import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledContainer, StyledForm } from '../styles/styled-componets';
import { useAuth } from 'web-firebase';

import withContext from '../hocs/withContext';

const SignUp = ({ auth }) => {
  const { createUser, error } = useAuth(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const displayName = `${data.get('firstName')} ${data.get('lastName')}`;
    const email = data.get('email');
    const password = data.get('password1');
    createUser(displayName, email, password);
    console.log(displayName, email, password);
  };
  console.log(error);
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='first-name'>First Name</label>
        <input type='text' name='firstName' id='first-name' />
        <label htmlFor='last-name'>Last Name</label>
        <input type='text' name='lastName' id='last-name' />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password1'>Password</label>
        <input type='password' name='password1' id='password1' />
        <label htmlFor='password2'>Confirm Password</label>
        <input type='password' name='password2' id='password2' />
        <hr />
        <button type='submit'>Sign Up</button>
        <button type='button'>Sign In with Google</button>
      </StyledForm>
    </StyledContainer>
  );
};

export default withContext(SignUp);
