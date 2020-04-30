const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  poweredByHeader: false,
  env: {
    API_URL: isProduction
      ? 'https://server.wickd.pro/graphql'
      : 'http://localhost:5000/graphql',
  },
};
