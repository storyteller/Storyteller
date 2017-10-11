var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webDevServerAdddress = "http://localhost:3001"

var defaultConfig = require('./webpack.config');

var config = _.extend({}, defaultConfig);
//include hot reload scripts
config.entry = {
  "bundle": [
    'webpack-dev-server/client?' + webDevServerAdddress,
    'webpack/hot/dev-server',
    "./client/client.js"
  ]
};
//prefix public path with webpack dev server address
config.output.publicPath = webDevServerAdddress + config.output.publicPath;
//include hot module replacement plugin
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//add react-hot loader to loader chain for jsx files
var jsxLoader = _.find(config.module.loaders, function (entry) {
  return /jsx/.test(entry.test.toString());
});

jsxLoader.loaders = ['react-hot-loader', jsxLoader.loader];
delete jsxLoader.loader;

//jsxLoader.loader = 'react-hot!' + jsxLoader.loader;

var comments = [];

app.use('/client/public', express.static(__dirname + '/client/public'));

app.use('/', function(req, res) {
  res.sendFile(__dirname + '/harness.htm');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', webDevServerAdddress);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});


app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Server Listening at localhost:3000');
});

new WebpackDevServer(webpack(config), {
  contentBase: 'http://localhost:3000',
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  quiet: true,
  hot: true
}).listen(3001, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server Listening at localhost:3001');
});
