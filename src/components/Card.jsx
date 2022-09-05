import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from '../styles/styled-componets';

import { BsDroplet } from 'react-icons/bs';
import { GiWindsock, GiRoundKnob } from 'react-icons/gi';
import { SpinnerCircularFixed } from 'spinners-react';
import { GoLocation } from 'react-icons/go';

import withContext from '../hocs/withContext';

const Card = ({ data, loading, measurements }) => {
  const navigate = useNavigate();
  if (loading)
    return (
      <StyledCard>
        <SpinnerCircularFixed size={100} />
      </StyledCard>
    );
  return (
    <StyledCard
      onClick={() =>
        navigate(
          `/details/${data?.name?.toLowerCase()}-${data?.sys?.country?.toLowerCase()}`
        )
      }
    >
      <div className='card-header'>
        <div className='location'>
          <GoLocation size={30} />
          <p>
            <span>{data?.name?.replace(' Province', '')}</span>{' '}
            <span>{data?.sys?.country}</span>
          </p>
        </div>
        <span>
          {new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(data?.dt * 1000)}
        </span>
      </div>
      <div className='card-content'>
        {' '}
        <div className='temps'>
          <span>{Math.round(data?.main?.temp_min)}</span>
          {measurements?.degree}
          {' / '}
          <span>{Math.round(data?.main?.temp_max)}</span>
          {measurements?.degree}
        </div>
        <div className='data-wrapper'>
          <p className='current-temp'>
            {Math.round(data?.main?.temp)}
            {measurements?.degree}
          </p>
          <p className='status'>{data?.weather[0]?.main}</p>
        </div>
        <div className='img-wrapper'>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
            alt='icon'
          />
        </div>
        <div className='misc-data'>
          <span>
            <BsDroplet size={30} /> {data?.main?.humidity}%
          </span>

          <span>
            <GiWindsock size={30} />
            {Math.round(data?.wind?.speed)} {measurements?.velocity}
          </span>
          <span>
            <GiRoundKnob size={30} />
            {data?.main?.pressure} mbar
          </span>
        </div>
      </div>
      <div className='card-footer'>
        <p>
          {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
            data?.dt * 1000
          )}
        </p>
        <p>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
          }).format(data?.dt * 1000)}
        </p>
      </div>
    </StyledCard>
  );
};

export default withContext(Card);
