import axios from 'axios';
// https://api.openweathermap.org/data/2.5/forecast?q=jeonju&appid=f62408b4a87ada957cac20e4c23107ad
const config = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5/',
  ICON_URL: 'https://openweathermap.org/img/wn/',
  KEY: 'f62408b4a87ada957cac20e4c23107ad',
};

function getUserWeather(lat, lon) {
  return axios.get(
    `${config.BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${config.KEY}&units=metric`,
  );
}

function weatherCity(city) {
  return axios.get(
    `${config.BASE_URL}weather?q=${city}&appid=${config.KEY}&units=metric`,
  );
}

function weatherWeek(city) {
  return axios.get(
    `${config.BASE_URL}forecast?q=${city}&appid=${config.KEY}&units=metric`,
  );
}

// function weatherIcon(icon) {
//   return axios.get(`${config.ICON_URL}${icon}@2x.png`);
// }

export { getUserWeather, weatherCity, weatherWeek };
// weatherIcon;
