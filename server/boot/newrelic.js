module.exports = function newrelicInit(server) {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.LOOPBACK_AUTO) {
      require('newrelic');
    }
  }
};
