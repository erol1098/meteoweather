import React from 'react';

import { StyledCard } from '../Style/styled-componets';
import { BsDroplet } from 'react-icons/bs';
import { GiWindsock, GiRoundKnob } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';
const Card = ({ data }) => {
  return (
    <StyledCard>
      <div className='card-header'>
        <div className='location'>
          <GrMapLocation size={30} />
          <p>
            <span>{data?.name}</span> <span>{data?.sys?.country}</span>
          </p>
        </div>
        <span>
          {new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(new Date())}
        </span>
      </div>
      <div className='card-content'>
        {' '}
        <div className='temps'>
          <span>{Math.round(data?.main?.temp_min)}</span>
          {'°C / '}
          <span>{Math.round(data?.main?.temp_max)}</span>
          {'°C'}
        </div>
        <div className='data-wrapper'>
          <p className='current-temp'>
            {Math.round(data?.main?.temp)}
            {'°C'}
          </p>
          <p className='status'>{data?.weather[0]?.main}</p>
        </div>
        <div className='img-wrapper'>
          <img
            src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
            alt='icon'
          />
        </div>
        <div className='misc-data'>
          <span>
            <BsDroplet size={30} /> {data?.main?.humidity}%
          </span>

          <span>
            <GiWindsock size={30} />
            {/* {data?.wind?.deg} */}
            {Math.round(data?.wind?.speed)}km/h
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
            new Date()
          )}
        </p>
        <p>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
          }).format(new Date())}
        </p>
      </div>
    </StyledCard>
  );
};

export default Card;
