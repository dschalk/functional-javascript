var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
  context: __dirname + "/",
  entry: "./main.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },

/*    module: {
        rules: [
            {
                loader: "babel-loader",
                options: {
                    "presets" : [ "es2015" ]
                },
                exclude: [/node_modules/],
           } 
        ]
    }, */

    plugins: [
            new htmlWebpackPlugin({
                filename: __dirname + "/dist/index.html",
                template: __dirname + "/dist/template.html" 
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
}


