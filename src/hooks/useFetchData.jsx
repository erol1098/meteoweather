import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = (query) => {
  const { city, code } = query;
  // console.log(city, code);
  const [response, setResponse] = useState([]);

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
  }, [city, code]);
  console.log('sfsafsfa', response);
  return response;
};

export default useFetchData;
