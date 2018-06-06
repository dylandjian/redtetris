var process = require("process")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["react-hot-loader/patch", "./src/client/entry.js"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ]
      },
      {
        test: /\.(woff|eot|ttf|svg|jpg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: "[path][name].[ext]"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/client/index.html"
    })
  ]
}
