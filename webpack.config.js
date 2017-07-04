var path = require('path');

module.exports = {
  entry: './src/root.js',
  output: {
    filename: 'root.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders:[ { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ } ]
  }
};