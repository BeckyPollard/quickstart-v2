const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects js styles into DOM
          'css-loader', // 2. turns css into js
          'sass-loader', // 1. turns scss into css
        ],
      },
    ],
  },
};
