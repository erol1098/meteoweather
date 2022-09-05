import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledForm, StyledMainContainer } from '../styles/styled-componets';
import { SpinnerCircular } from 'spinners-react';

import toastify from '../services/toastify';
import withContext from '../hocs/withContext';

const SignUp = ({ userInfo, createUser, error }) => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const checkError = () => {
    toastify('error', error?.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const displayName = `${data.get('firstName')} ${data.get('lastName')}`;
    const email = data.get('email');
    const password = data.get('password1');
    (async () => {
      setSending(true);
      await createUser(displayName, email, password);
      setSending(false);
    })();
  };

  useEffect(() => {
    checkError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  useEffect(() => {
    userInfo && toastify('success', 'Registered Successfully');
    userInfo && navigate('/');
  }, [userInfo, navigate]);
  return (
    <StyledMainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='first-name'>First Name</label>
        <input
          type='text'
          name='firstName'
          id='first-name'
          required
          autoFocus
        />
        <label htmlFor='last-name'>Last Name</label>
        <input type='text' name='lastName' id='last-name' required />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required />
        <label htmlFor='password1'>Password</label>
        <input type='password' name='password1' id='password1' required />
        <label htmlFor='password2'>Confirm Password</label>
        <input type='password' name='password2' id='password2' required />
        <button type='submit'>
          {sending ? <SpinnerCircular size={30} color='white' /> : 'Sign Up'}
        </button>
        <button type='button'>Sign In with Google</button>
        <p onClick={() => navigate('/login')}>
          Already have an account? Sign in
        </p>
      </StyledForm>
    </StyledMainContainer>
  );
};

export default withContext(SignUp);
