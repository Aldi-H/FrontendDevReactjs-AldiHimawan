/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESTAURANT_BASE_URL: process.env.RESTAURANT_BASE_URL,
    REVIEWS_BASE_URL: process.env.REVIEWS_BASE_URL,
    X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
    X_RAPIDAPI_HOST: process.env.X_RAPIDAPI_HOST,
  },
};

module.exports = nextConfig;
