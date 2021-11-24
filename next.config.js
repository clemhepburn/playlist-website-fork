require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

  images: {
    domains: ["https://lune-backend.herokuapp.com/tracks"],
  },
};
