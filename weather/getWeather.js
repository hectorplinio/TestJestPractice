const { default: axios } = require("axios");
require("dotenv").config();
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const ApiKey = process.env.API_KEY;

const fetchWeather = async (city) => {
  try {
    debugger;
    const response = await axios(url + city + "&appid=" + ApiKey);
    return response;
  } catch (error) {
    return error.response;
  }
};

module.exports = { fetchWeather };
