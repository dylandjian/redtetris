var webpack = require("webpack")
var merge = require("webpack-merge")
var path = require("path")

var sharedConf = require("./webpack.shared")

module.exports = merge(sharedConf, {
  devtool: "eval-source-map",
  devServer: {
    contentBase: "../src/client",
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
})
