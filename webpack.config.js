module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './app/main.js'],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
  }