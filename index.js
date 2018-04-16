process.env.BABEL_DISABLE_CACHE = 1;

global._babelPolyfill || require('babel-polyfill');

module.exports = require('./lib');
