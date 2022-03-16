const { default: axios } = require('axios')
require('dotenv').config()

const url = process.env.API_URL
const ApiKey = process.env.API_KEY

const fetchWeather = async (city) => {
  try {
    const response = await axios(url + city + ApiKey)
    return response
  } catch (error) {
    return error.response
  }
}

module.exports = { fetchWeather }
