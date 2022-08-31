import axios from 'axios';
import { useCallback, useContext, useEffect } from 'react';

import AppContext from '../context/app-context';

const useFetchData = ({ city, code }, flag) => {
  const { setResponse, setDaily } = useContext(AppContext);

  const getData = useCallback(async () => {
    try {
      if (flag === 'current' && city && code) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setResponse(data);
      } else if (flag === 'daily' && city && code) {
        const { data } = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${code}&days=10&key=${process.env.REACT_APP_DAILY_API_KEY}`
        );
        setDaily(data);
      }
    } catch (error) {
      console.log('Error', error.response.data.message);
    }
  }, [city, code, flag, setResponse, setDaily]);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useFetchData;
