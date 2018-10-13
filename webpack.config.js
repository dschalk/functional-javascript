var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/",
  entry: "./main.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
  }
}
/*  ,plugins: [
        new UnminifiedWebpackPlugin()
    ]
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin()
        ],
        usedExports: true,
        sideEffects: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
 */

// var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
 


