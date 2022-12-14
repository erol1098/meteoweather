import { useCallback, useContext, useEffect } from 'react';

import axios from 'axios';

import AppContext from '../context/app-context';
import toastify from '../services/toastify';
import setStorage from '../services/local-storage';

const useFetchData = ({ city, code }, flag, isSaved = 1) => {
  const {
    setResponse,
    setDaily,
    setLoading,
    setDailyLoading,
    units,
    setHistoryItems,
  } = useContext(AppContext);

  const getData = useCallback(async () => {
    try {
      //? For Current Weather Data
      if (flag === 'current' && city && code) {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setResponse(data);
        isSaved && setStorage(data, setHistoryItems);

        //? For 10-Day Weather Data
      } else if (flag === 'daily' && city && code) {
        setDailyLoading(true);
        const { data } = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${code}&days=10&key=${process.env.REACT_APP_DAILY_API_KEY}`
        );
        setDaily(data);
      }
    } catch (error) {
      toastify('error', error.response.data.message);
    } finally {
      setLoading(false);
      setDailyLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, code, flag, setResponse, setDaily, setLoading]);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useFetchData;
