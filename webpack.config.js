const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// require - import in commonJS modules for Node.js
// module.exports - this is export, but for Node.js

module.exports = {
  entry: './src/index.js', // main js file, entry point, (dependency graph root)

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],

  stats: 'errors-only',

  devServer: {
    port: 5555,
    open: true,
  },
};
