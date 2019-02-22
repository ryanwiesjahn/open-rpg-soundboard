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
    rules: [{
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: [/node_modules/, /@types/],
      },
    ]
  },
}

// const commonConfig = {
//   mode: 'development',
//   target: 'electron-main',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         enforce: 'pre',
//         loader: 'tslint-loader',
//         options: {
//           typeCheck: true,
//           emitErrors: true
//         }
//       },
//       {
//         test: /\.tsx?$/,
//         loader: 'ts-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
//   }
// }

// module.exports = Object.assign({
//   entry: { main: './src/main/index.ts' }
// }, commonConfig)
