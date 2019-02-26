const path = require('path')

module.exports = {
  target: 'electron-main',
  entry: path.resolve('src/main/index.ts'),
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve('build'),
    publicPath: '/build/',
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src')
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: [/node_modules/, /@types/],
      }
    ]
  },
}
