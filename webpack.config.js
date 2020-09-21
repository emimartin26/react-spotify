const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve("src/client/index.js"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              esModule: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
                auto: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "./index.html",
    }),
    new Dotenv(),
  ],
};