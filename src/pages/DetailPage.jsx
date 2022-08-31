import React from 'react';
import { StyledContainer } from '../Style/styled-componets';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { GiWindsock, GiRoundKnob } from 'react-icons/gi';
import { BsDroplet } from 'react-icons/bs';

import useFetchData from '../hooks/useFetchData';
import withContext from '../hocs/withContext';

const DetailPage = ({ response, daily }) => {
  const { query } = useParams();
  const arr = query.split('-');
  useFetchData({ city: arr[0], code: arr[1] }, 'current');
  useFetchData({ city: arr[0], code: arr[1] }, 'daily');
  // console.log(arr);
  // console.log(response);
  console.log(daily);
  return (
    <StyledContainer>
      <section className='left-side'>
        <div className='card-header'>
          <div className='location'>
            <GoLocation size={30} />
            <p>
              <span>{response?.name?.replace(' Province', '')}</span>{' '}
              <span>{response?.sys?.country}</span>
            </p>
          </div>
          <span>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: '2-digit',
            }).format(response?.dt * 1000 || new Date())}
            {', '}
            {new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(response?.dt * 1000 || new Date())}
          </span>
          <p className='current-temp'>
            {Math.round(response?.main?.temp)}
            {'°C'}
          </p>
        </div>
      </section>
      <section className='right-side'>
        <p>
          <span>
            <FiSunrise size={40} />{' '}
            {new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(response?.sys?.sunrise * 1000 || new Date())}
          </span>{' '}
          <span>
            <FiSunset size={40} />{' '}
            {new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(response?.sys?.sunset * 1000 || new Date())}
          </span>
        </p>

        <p>
          <span>
            <FaTemperatureHigh size={40} /> {response?.main?.temp_min}
            {'°C'}
          </span>
          <span>
            <FaTemperatureLow size={40} /> {response?.main?.temp_max}
            {'°C'}
          </span>
        </p>

        <p>
          <GiRoundKnob size={40} />
          {response?.main?.pressure}
          {' mbar'}
        </p>
        <p>
          <BsDroplet size={40} />
          {response?.main?.humidity}
          {'%'}
        </p>
        <p>
          <GiWindsock size={40} />
          {response?.wind?.deg}
          {'°'} / {response?.wind?.speed}
          {' km/h'}
        </p>
      </section>
    </StyledContainer>
  );
};

export default withContext(DetailPage);
