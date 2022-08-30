import axios from 'axios';
import { useContext, useEffect } from 'react';
import AppContext from '../context/app-context';

const useFetchData = ({ city, code }) => {
  const { response, setResponse } = useContext(AppContext);

  useEffect(() => {
    city &&
      code &&
      (async () => {
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );
          setResponse(data);
        } catch (error) {
          console.log('Error', error.response.data.message);
        }
      })();
  }, [city, code, setResponse]);

  return response;
};

export default useFetchData;
