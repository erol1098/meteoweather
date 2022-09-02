import React, { useState } from 'react';

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/round-borders.css';

import useFetchData from '../hooks/useFetchData';
import { StyledHeader } from '../styles/styled-componets';
import { useNavigate } from 'react-router-dom';
import withContext from '../hocs/withContext';
import useToastify from '../hooks/useToastify';

const Header = ({ auth, userInfo, logOut }) => {
  const navigate = useNavigate();
  // const { logOut } = useAuth(auth);
  const { Toastify } = useToastify();

  const [query, setQuery] = useState({ city: '', code: '' });
  useFetchData(query, 'current');

  const onPlaceSelect = (value) => {
    setQuery({
      city: value?.properties?.city,
      code: value?.properties?.country_code,
    });
  };

  const postprocessHook = (feature) => {
    return `${feature?.properties?.city} - ${feature?.properties?.country}`;
  };

  return (
    <StyledHeader>
      <div onClick={() => navigate('/')} className='logo'>
        Logo
      </div>
      <GeoapifyContext apiKey={process.env.REACT_APP_CITY_API_KEY}>
        <GeoapifyGeocoderAutocomplete
          placeholder='Enter address here'
          placeSelect={onPlaceSelect}
          postprocessHook={postprocessHook}
        />
      </GeoapifyContext>
      <div>
        {!userInfo && (
          <>
            <button type='button' onClick={() => navigate('/login')}>
              Login
            </button>
            <button type='button' onClick={() => navigate('/register')}>
              Register
            </button>
          </>
        )}
        {userInfo && (
          <button
            type='button'
            onClick={() => {
              logOut();
              userInfo && Toastify('info', 'Logged Out!');
              navigate('/');
            }}
          >
            Logout
          </button>
        )}
      </div>
    </StyledHeader>
  );
};

export default withContext(Header);
