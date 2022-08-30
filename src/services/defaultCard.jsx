import axios from 'axios';
const getData = async (setDefaultQuery, lat, lon) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    setDefaultQuery(data);
  } catch (error) {
    console.log('Error', error.response.data.message);
  }
};

const defaultCard = (setDefaultQuery) => {
  let lat, lon;
  navigator.geolocation.getCurrentPosition((pos) => {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    getData(setDefaultQuery, lat, lon);
  });
};
export default defaultCard;
