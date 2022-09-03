import axios from 'axios';
import { useCallback, useContext, useEffect } from 'react';

import AppContext from '../context/app-context';
import toastify from '../services/toastify';

const useFetchData = ({ city, code }, flag) => {
  const { setResponse, setDaily, setLoading } = useContext(AppContext);

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      //? For Current Weather Data
      if (flag === 'current' && city && code) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setResponse(data);

        //? For 10-Day Weather Data
      } else if (flag === 'daily' && city && code) {
        const { data } = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${code}&days=10&key=${process.env.REACT_APP_DAILY_API_KEY}`
        );
        setDaily(data);
      }
    } catch (error) {
      toastify('error', error.response.data.message);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, code, flag, setResponse, setDaily, setLoading]);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useFetchData;
