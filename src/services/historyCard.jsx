import axios from 'axios';

import setStorage from './local-storage';
import toastify from './toastify';
//? Fetch Weather Data According To Clicked Historical Data

const getData = async (
  searchParams,
  setResponse,
  setLoading,
  setHistoryItems
) => {
  try {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${searchParams.lat}&lon=${searchParams.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en`
    );
    setResponse(data);
    setStorage(data, setHistoryItems);
  } catch (error) {
    toastify('error', error.response?.data.message);
  } finally {
    setLoading(false);
  }
};

const historyCard = (
  searchParams,
  setResponse,
  setLoading,
  setHistoryItems
) => {
  getData(searchParams, setResponse, setLoading, setHistoryItems);
};
export default historyCard;
