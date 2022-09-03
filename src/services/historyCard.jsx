import axios from 'axios';

const getData = async (searchParams, setResponse, setLoading) => {
  try {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchParams}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    setResponse(data);
  } catch (error) {
    console.log('error', error.response?.data.message);
  }
};

const historyCard = (searchParams, setResponse, setLoading) => {
  getData(searchParams, setResponse, setLoading);
};
export default historyCard;