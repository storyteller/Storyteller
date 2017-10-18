var ProgressPlugin = require('./util/progress-plugin');

var PROD = process.env.NODE_ENV === 'production'

var plugins = [
  ProgressPlugin()
]

if (PROD) {
  plugins = []
}

module.exports = {
  entry: {
    "bundle": ['./client/client.js'],
    "batch-bundle": ['./client/batch.js'],
    "embed": ['./client/embed.js'],
    "topics": ['./client/topics.js'],
	  "preview": ['./client/preview.js'],
	  "reduxharness": ['./client/reduxharness.js']
  },
  output: {
    path: __dirname + '/src/dotnet-storyteller',
    filename: "[name].js",
    publicPath: '/client/public/javascript/',
    pathinfo: true
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['.js', '.jsx']
  },
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?{"presets": ["es2015", "react"]}',
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'eval'
}
