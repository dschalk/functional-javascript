
var path = require('path');

/*module.exports = {
  context: __dirname + "/",
  entry: "./main.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
  }
}  */

var path = require('path');
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
 
module.exports = {
  context: __dirname + "/",
  entry: "./main.js",
   // entry: {index: './src/index.js'},
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
  },
  //  output: {path: path.resolve(__dirname, 'dist'),filename: 'library.min.js'},
    plugins: [
        new UnminifiedWebpackPlugin()
    ]
};


