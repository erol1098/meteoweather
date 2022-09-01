import React, { useEffect } from 'react';
import {
  StyledDetailContainer,
  StyledDailyContainer,
} from '../Style/styled-componets';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { GiWindsock, GiRoundKnob } from 'react-icons/gi';
import { BsDroplet } from 'react-icons/bs';

import useFetchData from '../hooks/useFetchData';
import withContext from '../hocs/withContext';
import DailyCard from '../components/DailyCard';
import setBg from '../services/setBg';

const DetailPage = ({
  response,
  daily,
  detailPageTheme,
  setDetailPageTheme,
}) => {
  const { query } = useParams();
  const arr = query.split('-');

  useFetchData({ city: arr[0], code: arr[1] }, 'current');
  useFetchData({ city: arr[0], code: arr[1] }, 'daily');

  useEffect(() => {
    setBg(response?.weather[0]?.id, setDetailPageTheme);
  }, [response, setDetailPageTheme]);
  return (
    <>
      <StyledDetailContainer theme={detailPageTheme}>
        <section className='top-side'>
          <section className='left-side'>
            <div>
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
          </section>
          <section className='right-side'>
            <div>
              <span>
                <FiSunrise size={40} />{' '}
                {new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                }).format(response?.sys?.sunrise * 1000 || new Date())}
              </span>
              <span>
                <FiSunset size={40} />{' '}
                {new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                }).format(response?.sys?.sunset * 1000 || new Date())}
              </span>
            </div>

            <div>
              <span>
                <FaTemperatureHigh size={40} />{' '}
                {Math.round(response?.main?.temp_min)}
                {'°C'}
              </span>
              <span>
                <FaTemperatureLow size={40} />{' '}
                {Math.round(response?.main?.temp_max)}
                {'°C'}
              </span>
            </div>
            <div>
              <GiRoundKnob size={40} />
              {response?.main?.pressure}
              {' mbar'}
            </div>
            <div>
              <BsDroplet size={40} />
              {response?.main?.humidity}
              {'%'}
            </div>
            <div>
              <GiWindsock size={40} />
              {response?.wind?.deg}
              {'°'} / {response?.wind?.speed}
              {' km/h'}
            </div>
          </section>
        </section>
        <StyledDailyContainer>
          {/* <h3>10 Days Forecast</h3> */}
          {!daily?.data && <p>Weather Data Unavailable!</p>}
          {daily?.data?.map((day, i) => (
            <DailyCard key={i} data={day} />
          ))}
        </StyledDailyContainer>
      </StyledDetailContainer>
    </>
  );
};

export default withContext(DetailPage);
