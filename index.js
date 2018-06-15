var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.docs');

const PORT = 1337;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
		console.log('Listening at localhost:'+PORT);
  }
});
