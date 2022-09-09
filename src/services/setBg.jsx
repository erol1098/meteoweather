import clear from '../assets/clear.jpg';
import atmosphere from '../assets/atmosphere.jpg';
import snow from '../assets/snow.jpg';
import rain from '../assets/rain.jpg';
import drizzle from '../assets/drizzle.jpg';
import thunderstorm from '../assets/thunderstorm.jpg';

import few from '../assets/few.jpg';
import sct from '../assets/sct.jpg';
import bkn from '../assets/bkn.jpg';
import overcast from '../assets/ovc.jpg';

//? For Background Theme According To Weather Info
const setBg = (id = 0, setDetailPageTheme) => {
  if (id === 800) setDetailPageTheme(clear);
  if (id === 801) setDetailPageTheme(few);
  if (id === 802) setDetailPageTheme(sct);
  if (id === 803) setDetailPageTheme(bkn);
  if (id === 804) setDetailPageTheme(overcast);
  
  if (id >= 700 && id < 800) setDetailPageTheme(atmosphere);
  if (id >= 600 && id < 700) setDetailPageTheme(snow);
  if (id >= 500 && id < 600) setDetailPageTheme(rain);
  if (id >= 300 && id < 400) setDetailPageTheme(drizzle);
  if (id >= 200 && id < 300) setDetailPageTheme(thunderstorm);
};
export default setBg;
