/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('prod'),
    }),
  ],
}
