var ProgressPlugin = require('./util/progress-plugin');
module.exports = {
  entry: {
    "bundle": ['./client/client.js'],
    "batch-bundle": ['./client/batch.js'],
    "embed": ['./client/embed.js'],
    "topics": ['./client/topics.js'],
	  "preview": ['./client/preview.js'],
	  "reduxharness.js": ['./client/reduxharness.js']
  },
  output: {
    path: __dirname + '/src/StorytellerRunner',
    filename: "[name].js",
    publicPath: '/client/public/javascript/',
    pathinfo: true
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    ProgressPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel?{"presets": ["es2015", "react"]}', 
        exclude: /node_modules/, 
      },
    ]
  },
  devtool: 'eval'
}
