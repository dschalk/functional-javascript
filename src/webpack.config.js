var path = require('path');

module.exports = {
  context: __dirname + "/",
  entry: "./main.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }],
  }
}
