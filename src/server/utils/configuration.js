import getManifest from './getManifest';

function configuration(NODE_ENV, app) {
  if (NODE_ENV === 'development') {
    console.log('Development config');
    // eslint-disable-next-line global-require
    const webpack = require('webpack');
    // eslint-disable-next-line global-require
    const webpackConfig = require('../../../webpack/webpack.config.client');
    // eslint-disable-next-line global-require
    const webpackDevMiddleware = require('webpack-dev-middleware');
    // eslint-disable-next-line global-require
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));
  } else {
    app.use((req, res, next) => {
      if (!req.hashManifest)req.hashManifest = getManifest();
      next();
    });
    app.use(express.static(`${__dirname}/public`));
  }
}
export default configuration;
