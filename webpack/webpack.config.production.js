var path = require("path")
var webpack = require("webpack")
var merge = require("webpack-merge")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var sharedConf = require("./webpack.shared")

module.exports = merge(sharedConf, {
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new FaviconsWebpackPlugin('./src/client/favicon.png')
  ]
})
