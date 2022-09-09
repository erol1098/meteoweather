import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, StyledHeader } from '../styles/styled-componets';

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/round-borders.css';

import useFetchData from '../hooks/useFetchData';
import withContext from '../hocs/withContext';
import toastify from '../services/toastify';
import Logo from '../assets/icon.png';

const Header = ({ userInfo, logOut }) => {
  const navigate = useNavigate();

  //? Take user's search query and fetch weather data
  const [query, setQuery] = useState({ city: '', code: '' });
  useFetchData(query, 'current');

  //? Take user's search query from Geoapify
  const onPlaceSelect = (value) => {
    setQuery({
      city: value?.properties?.city?.toLocaleLowerCase(),
      code: value?.properties?.country_code?.toLocaleLowerCase(),
    });
    navigate('/');
  };

  //? Formats query's result with desired parameters
  const postprocessHook = (feature) => {
    return `${feature?.properties?.city} - ${feature?.properties?.country}`;
  };

  return (
    <StyledHeader>
      <div onClick={() => navigate('/')} className='logo'>
        <img src={Logo} alt='logo' />
        <h1>Meteo</h1>
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
            <Button
              className='login-btn'
              type='button'
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              className='register-btn'
              type='button'
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </>
        )}
        {userInfo && (
          <Button
            type='button'
            className='logout-btn'
            onClick={() => {
              logOut();
              localStorage.removeItem('accessToken');
              toastify('info', 'Logged Out!');
              navigate('/');
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </StyledHeader>
  );
};

export default withContext(Header);
