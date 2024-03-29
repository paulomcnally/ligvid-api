module.exports = function mountLoopBackExplorer(server) {
  if (process.env.NODE_ENV !== 'production') {
    var explorer;
    try {
      explorer = require('loopback-explorer');
    } catch(err) {
      console.log(
        'Run `npm install loopback-explorer` to enable the LoopBack explorer'
      );
      return;
    }

    var restApiRoot = server.get('restApiRoot');

    var explorerApp = explorer(server, { basePath: restApiRoot });
    server.use('/explorer', explorerApp);
    server.once('started', function() {
      var baseUrl = server.get('url').replace(/\/$/, '');
      // express 4.x (loopback 2.x) uses `mountpath`
      // express 3.x (loopback 1.x) uses `route`
      var explorerPath = explorerApp.mountpath || explorerApp.route;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    });
  }
  else {
    server.use('/explorer', function(req, res) {
      res.send('Disable on production');
    });
    console.log('Disable explorer on production');
  }

};
