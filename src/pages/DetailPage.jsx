import React, { useEffect } from 'react';
import {
  StyledDetailContainer,
  StyledDailyContainer,
} from '../styles/styled-componets';
import { Navigate, useParams } from 'react-router-dom';

import { SpinnerCircularFixed } from 'spinners-react';

import { GoLocation } from 'react-icons/go';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { GiWindsock, GiRoundKnob } from 'react-icons/gi';
import { BsDroplet } from 'react-icons/bs';
import { FaRegGrinBeamSweat } from 'react-icons/fa';

import ErrorBoundary from '../components/ErrorBoundary';
import useFetchData from '../hooks/useFetchData';
import withContext from '../hocs/withContext';
import DailyCard from '../components/DailyCard';
import setBg from '../services/setBg';

const DetailPage = ({
  response,
  daily,
  dailyLoading,
  detailPageTheme,
  setDetailPageTheme,
  token,
}) => {
  //? Taking search query from URL and fetching current and daily data
  const { query } = useParams();
  const arr = query.split('-');

  useFetchData({ city: arr[0]?.toLowerCase(), code: arr[1] }, 'current', 0); //? For current data

  useFetchData({ city: arr[0]?.toLowerCase(), code: arr[1] }, 'daily'); //? For daily data

  useEffect(() => {
    setBg(response?.weather[0]?.id, setDetailPageTheme);
  }, [response, setDetailPageTheme]);

  if (!token.current) return <Navigate to={'/login'} />;
  else
    return (
      <>
        <StyledDetailContainer theme={detailPageTheme}>
          <section className='top-side'>
            <section className='middle-side'>
              <div>
                <span>
                  <FiSunrise size={40} color='#FFF323' />
                  {' Sun Rise : '}
                  {new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(response?.sys?.sunrise * 1000 || new Date())}
                </span>
              </div>
              <div>
                <span>
                  <FiSunset size={40} color='#FF7800' />
                  {' Sun Set : '}
                  {new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(response?.sys?.sunset * 1000 || new Date())}
                </span>
              </div>
              <div>
                <span>
                  <FaTemperatureHigh size={40} color='#D61C4E' />
                  {' Max Temp : '}
                  {Math.round(response?.main?.temp_max)}
                  {'°C'}
                </span>
              </div>
              <div>
                <span>
                  <FaTemperatureLow size={40} color='#5800FF' />
                  {' Min Temp : '}
                  {Math.round(response?.main?.temp_min)}
                  {'°C'}
                </span>
              </div>
            </section>

            <section className='left-side'>
              <div>
                <GoLocation size={30} color='#F32424' />
                <span>{response?.name?.replace(' Province', '')}</span>{' '}
                <span>{response?.sys?.country}</span>
              </div>
              <span>
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
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
              <p className='current'>
                {response?.weather[0]?.description?.replace(
                  /\w\S*/g,
                  function (txt) {
                    return (
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    );
                  }
                )}
              </p>
            </section>

            <section className='right-side'>
              <div>
                <FaRegGrinBeamSweat size={40} color='#FFCB42' />
                {' Feels Like : '}
                {Math.round(response?.main?.feels_like)}
                {'°C'}
              </div>
              <div>
                <GiRoundKnob size={40} color='#827397' />
                {' Air Pressure : '}
                {response?.main?.pressure}
                {' mbar'}
              </div>
              <div>
                <BsDroplet size={40} color='#1363DF' />
                {' Humidity : '}
                {response?.main?.humidity}
                {'%'}
              </div>
              <div>
                <GiWindsock size={40} color='#F32424' />
                {' Wind : '}
                {response?.wind?.deg}
                {'°'} / {Math.round(response?.wind?.speed * 3.6)}
                {' km/h'}
              </div>
            </section>
          </section>

          <ErrorBoundary>
            <StyledDailyContainer>
              {!dailyLoading && !daily?.data && (
                <p>Weather Data Unavailable!</p>
              )}
              {dailyLoading ? (
                <p>
                  <SpinnerCircularFixed />
                </p>
              ) : (
                daily?.data?.map((day, i) => <DailyCard key={i} data={day} />)
              )}
            </StyledDailyContainer>
          </ErrorBoundary>
        </StyledDetailContainer>
      </>
    );
};

export default withContext(DetailPage);
