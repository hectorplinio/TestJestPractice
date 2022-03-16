const { default: axios } = require('axios')
require('dotenv').config()

const url = process.env.API_URL_BOOKS
const ApiKey = process.env.API_KEY_BOOKS
const ApiConnect = process.env.API_CONNECT_BOOKS

const fetchBooks = async (book) => {
  try {
    const response = await axios(url + book + ApiConnect + ApiKey)
    debugger;
    return response
  } catch (error) {
    return error.response
  }
}

module.exports = { fetchBooks }
