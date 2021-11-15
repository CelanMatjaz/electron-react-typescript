const path = require('path');

/** @type {import("webpack").Configuration } */
module.exports = {
  mode: 'development',
  target: 'electron-main',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              retainLines: true,
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          'ts-loader',
        ],
        exclude: '/node_modules',
      },
    ],
  },
  entry: path.resolve(__dirname, './src/main/index.ts'),
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'index.js',
  },
};
