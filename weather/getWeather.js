const { default: axios } = require("axios");
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const ApiKey = "&appid=1fc681a1b30131febd8515b5989e5d95";

const fetchWeather = async (city) => {
  try {
    const response = await axios(url + city + ApiKey);
    return response;
  } catch (error) {
    return error.response;
  }
};

module.exports = { fetchWeather };
