var _ = require("lodash");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webDevServerAdddress = "http://localhost:3001"

var defaultConfig = require('./webpack.config');

var config = _.extend({
  devServer: {hot: true}
}, defaultConfig);
//include hot reload scripts
config.entry = {
  "bundle": [
    'webpack-dev-server/client?' + webDevServerAdddress,
    'webpack/hot/dev-server',
    "./client/hotreload.js"
  ]
};
//prefix public path with webpack dev server address
config.output.publicPath = webDevServerAdddress + config.output.publicPath;

//include hot module replacement plugin
config.plugins.push(new webpack.HotModuleReplacementPlugin());

for (var key in config.entry){
  config.entry[key].splice(0, 0, 'react-hot-loader/patch');
}



console.log(JSON.stringify(config, null, 4));

var comments = [];


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  quiet: true,
  hot: true
}).listen(3000, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server Listening at localhost:3000');
});
