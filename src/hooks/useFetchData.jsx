import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async (query = 'izmir') => {
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&format=json&apiKey=${process.env.REACT_APP_CITY_API_KEY}`
      );
      console.log(data);
      const { city, country_code: code } = data.results[0];
      const { data: res } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setResponse(res);
    })();
  }, []);

  return response;
};

export default useFetchData;
