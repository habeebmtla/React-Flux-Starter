const webpack = require("webpack");
const path = require("path");

const config = {
  mode: "production",
  entry: path.resolve(__dirname, "app/App.js"),
  output: {
    path: path.resolve(__dirname, "public/js/"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: ["env", "react", "stage-0"]
        }
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    open: true
  }
};

module.exports = config;
