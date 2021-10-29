const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      {
        test: /\.scss$/i,
        use: [
          // 'style-loader', // инлайнит стили в <style> перед </head>, оно уже не надо - дает ошибку, если включить вместе с mini-css loader.
          MiniCssExtractPlugin.loader, // это просто ссылка на загрузчик, она из нашего js файла вытянет строку css-ую и сделает отдельный css файлик красивый.
          'css-loader', // переведет css в commonJS модуль
          'sass-loader', // переведет sass в css
        ],
      },
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), // подключил этот файлик в head index.html автоматически. Он знает о его имени.
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CleanWebpackPlugin(),
  ],

  stats: 'errors-only',

  devServer: {
    port: 5555,
    open: true,
  },
};
