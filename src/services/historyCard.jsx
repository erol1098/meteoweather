import axios from 'axios';

import toastify from './toastify';

//? Fetch Weather Data According To Clicked Historical Data
const getData = async (searchParams, setResponse, setLoading) => {
  try {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${searchParams.lat}&lon=${searchParams.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en`
    );
    setResponse(data);
  } catch (error) {
    toastify('error', error.response?.data.message);
  } finally {
    setLoading(false);
  }
};

const historyCard = (searchParams, setResponse, setLoading) => {
  getData(searchParams, setResponse, setLoading);
};
export default historyCard;
