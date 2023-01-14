const axios = require("axios");
require('dotenv').config();

//60d5798ebc72445abfd8f5b92bf134b0


module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }