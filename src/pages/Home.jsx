import React, { useState } from 'react';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/round-borders.css';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
  const [query, setQuery] = useState({ city: '', code: '' });
  useFetchData(query);
  function onPlaceSelect(value) {
    console.log('last', value);
    setQuery({
      city: value.properties.city,
      code: value.properties.country_code,
    });
  }

  function onSuggectionChange(value) {
    console.log('first', value);
  }
  function postprocessHook(feature) {
    return `${feature.properties.city} - ${feature.properties.country}`;
  }
  return (
    <GeoapifyContext apiKey={process.env.REACT_APP_CITY_API_KEY}>
      <GeoapifyGeocoderAutocomplete
        placeholder='Enter address here'
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        postprocessHook={postprocessHook}
        // skipIcons={true}
        // skipDetails={true}
      />
    </GeoapifyContext>
  );
};

export default Home;
