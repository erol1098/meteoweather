import React, { useState } from 'react';

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/round-borders.css';

import useFetchData from '../hooks/useFetchData';
import { StyledHeader } from '../Style/styled-componets';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
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
      <div>Avatar</div>
    </StyledHeader>
  );
};

export default Header;
